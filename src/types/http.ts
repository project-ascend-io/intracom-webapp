export interface ResponseObject {
  success: boolean;
  message: string;
  responseObject: unknown;
  statusCode: number;
}
export type FetchParametersType = {
  method: string;
  endpoint: string;
  errorMessage: string;
  [key: string]: unknown;
};
