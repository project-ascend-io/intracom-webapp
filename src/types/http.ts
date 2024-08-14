export interface ResponseObject {
  success: boolean;
  message: string;
  responseObject: any;
  statusCode: number;
}
export type FetchParametersType = {
  method: string;
  endpoint: string;
  errorMessage: string;
  [key: string]: any;
};
