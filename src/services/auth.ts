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
    body: formData,
    errorMessage: "Failed to login user",
  };

  console.log("login FETCH Params", fetchParams);

  const data = await fetchFromAPI(fetchParams);

  if (data.success)
    localStorage.setItem("user", JSON.stringify(data.responseObject));

  return data;
}
export async function checkUser() {}
export async function logout() {}
