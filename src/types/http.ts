export interface ResponseObject {
  success: boolean;
  message: string;
  responseObject: any;
  statusCode: number;
}
export type FetchParametersType = {
  method: string;
  endpoint: string;
  body: any;
  errorMessage: string;
};
