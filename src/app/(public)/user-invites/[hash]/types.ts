import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export interface Organization {
  _id: string;
  name: string;
}

export interface Invitation {
  _id: string;
  email: string;
  organization: Organization;
  state: InviteState.Accepted | InviteState.Denied | InviteState.Pending | InviteState.Processing;
  hash: string;
}

export interface UserInviteForm {
  hash: string;
  username: string;
  password: string;
}

export enum InviteState {
  Pending = "Pending",
  Denied = "Denied",
  Accepted = "Accepted",
  Processing = "Processing"
}

export interface UserInviteParams extends Params {
  hash: string
}

export interface ApiResponseWrapper {
  success: boolean;
  message: string;
  responseObject: {} | null;
  statusCode: number;
}