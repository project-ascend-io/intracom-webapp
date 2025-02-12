import { LoginFormType } from '@/types/login';
import { fetchFromAPI } from '@/utils/fetch';
import { ResponseObject } from '@/types/http';
import AxiosApiInstance from '@/ApiInstance';
import { AuthUserType } from '@/types/auth';
import { AxiosError } from 'axios';

export type LoginResponse = {
  success: boolean;
  user: AuthUserType | null;
  message: string;
};

/**
 * Login user
 * @param {object} formData - an object containing the user email and password
 * @returns {object} - response data or error object returned from the server
 */
export async function login(formData: LoginFormType) {
  let loginResponse: LoginResponse;

  try {
    const res = await AxiosApiInstance.post<ResponseObject>(
      '/auth/login',
      JSON.stringify(formData)
    );

    if (!res.data.success) {
      console.log('error: ', res);
      throw new Error('Invalid Credentials');
    }

    localStorage.setItem(
      'intracom-user',
      JSON.stringify(res.data.responseObject)
    );
    loginResponse = {
      success: true,
      user: res.data.responseObject as AuthUserType,
      message: 'Success',
    };
  } catch (err: unknown) {
    const axiosError: AxiosError = err as AxiosError;

    loginResponse = {
      success: false,
      user: null,
      message: 'Invalid Credentials',
    };

    if (axiosError.status && axiosError.status >= 500) {
      loginResponse.message = 'Server Error: Please try again later.';
    }
  }

  return loginResponse;
}

/**
 * Check user session
 * @returns {object} - response data or error object returned from the server
 */
export async function checkSession(): Promise<ResponseObject> {
  const fetchParams = {
    method: 'GET',
    endpoint: '/auth/check',
    errorMessage: 'Failed to validate user session',
  };

  const data = await fetchFromAPI(fetchParams);

  if (data.success) {
    localStorage.setItem('intracom-user', JSON.stringify(data.responseObject));
  } else {
    localStorage.removeItem('intracom-user');
  }
  return data;
}

/**
 * Logout user
 * @returns {ResponseObject} The response from the server
 */
export async function logout(): Promise<ResponseObject> {
  const fetchParams = {
    method: 'POST',
    endpoint: '/auth/logout',
    errorMessage: 'Failed to logout user',
  };

  const data = await fetchFromAPI(fetchParams);

  if (data.success) {
    localStorage.removeItem('intracom-user');
  }
  return data;
}
