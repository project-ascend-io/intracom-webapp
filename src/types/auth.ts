export type OrganizationType = {
  _id: string;
};

export type UserType = {
  _id: string;
};

export type AuthContextType = {
  user: AuthUserType | null;
  setUser: (user: AuthUserType) => void;
};
export type AuthProviderType = {
  children: React.ReactNode;
};

export type AuthUserType = {
  _id: string;
  name: string;
  email: string;
  role: string;
  organization: OrganizationType;
  expires?: string;
};
