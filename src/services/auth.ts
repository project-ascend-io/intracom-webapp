import { LoginFormType } from "@/types/login";
import { fetchFromAPI } from "@/utils/fetch";

/**
 * Login user
 * @param {object} formData - an object containing the user email and password
 * @returns {object} - response data or error object returned from the server
 */
export async function login(formData: LoginFormType) {
  const fetchParams = {
    method: "POST",
    endpoint: "/auth/login",
    body: JSON.stringify(formData),
    errorMessage: "Failed to login user",
  };

  console.log("login FETCH Params", fetchParams);

  const data = await fetchFromAPI(fetchParams);

  if (data.success)
    localStorage.setItem("intracom-user", JSON.stringify(data.responseObject));

  return data;
}

/**
 * Check user session
 * @returns {object} - response data or error object returned from the server
 */
export async function checkSession() {
  const fetchParams = {
    method: "GET",
    endpoint: "/auth/check",
    errorMessage: "Failed to validate user session",
  };

  console.log("check FETCH Params", fetchParams);

  const data = await fetchFromAPI(fetchParams);

  if (data.success)
    localStorage.setItem("intracom-user", JSON.stringify(data.responseObject));
  else localStorage.removeItem("intracom-user");

  return data;
}

/**
 * Logout user
 * @returns {ResponseObject} The response from the server
 */
export async function logout() {
  const fetchParams = {
    method: "POST",
    endpoint: "/auth/logout",
    errorMessage: "Failed to logout user",
  };

  console.log("logout FETCH Params", fetchParams);

  const data = await fetchFromAPI(fetchParams);

  if (data.success) localStorage.removeItem("intracom-user");

  return data;
}
