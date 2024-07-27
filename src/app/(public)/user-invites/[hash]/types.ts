export interface Organization {
  _id: string;
  name: string;
}

export interface Invitation {
  _id: string;
  email: string;
  organization: Organization;
  state: 'pending' | 'accepted' | 'denied';
  hash: string;
}

export interface UserInviteForm {
  hash: string;
  username: string;
  password: string;
}