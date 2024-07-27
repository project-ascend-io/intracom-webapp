export type UserInviteForm = {
  hash: string;
  username: string;
  password: string;
}

export type Invitation = {
  _id: string;
  email: string;
  organization: {
    _id: string;
    name: string;
  };
  state: string;
  hash: string;
}

