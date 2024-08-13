import { FetchParametersType } from "@/types/http";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Perform HTTP fetch to API
 * @param {string} method - request method
 * @param {string} endpoint - api endpoint
 * @param {string} errorMessage - fetch error message to be displayed
 * @param {object} body - object containing properties to be passed to API
 * @returns {ResponseObject} The response from the server
 */
export async function fetchFromAPI({
  endpoint,
  body,
  method,
  errorMessage,
}: FetchParametersType) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });

    if (!response.ok) {
      //convert error string to object - for status 429 (Too many resquests) a string is returned as the body instead of an object, so we'll need to create an object here.
      const errorBody =
        response.status === 429
          ? { message: response.statusText }
          : JSON.parse(await response.text());

      console.error(
        `Request operation failed ${response.status}: ${errorMessage}`,
        errorBody
      );
      return errorBody;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(errorMessage, error);

    throw error;
  }
}
