import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { z } from 'zod';

export interface Organization {
  _id: string;
  name: string;
}

export interface Invitation {
  _id: string;
  email: string;
  organization: Organization;
  state:
    | InviteState.Accepted
    | InviteState.Denied
    | InviteState.Pending
    | InviteState.Processing;
  hash: string;
}

export interface UserInviteForm {
  hash: string;
  username: string;
  password: string;
}

export interface SignupFormProps {
  invite: Invitation;
  isLoading: boolean;
  onSubmit: (formData: UserInviteForm) => void;
}

export enum InviteState {
  Pending = 'Pending',
  Denied = 'Denied',
  Accepted = 'Accepted',
  Processing = 'Processing',
}

export interface UserInviteParams extends Params {
  hash: string;
}

export interface ApiResponseWrapper {
  success: boolean;
  message: string;
  responseObject: object | null;
  statusCode: number;
}

export const UserSignUpSchema = z.object({
  username: z
    .string()
    .min(5, 'Username must contain at least 5 characters')
    .refine((value: string) => {
      const containsSpecialChar = (ch: string) =>
        /[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/.test(ch);
      return !containsSpecialChar(value);
    }, 'Username cannot contain spaces or special characters.'),
  password: z
    .string()
    .min(8, 'Password must contain at least 8 characters')
    .refine((password: string) => {
      const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
      const containsLowercase = (ch: string) => /[a-z]/.test(ch);
      const containsNumber = (ch: string) => /[0-9]/.test(ch);
      const containsSpecialChar = (ch: string) =>
        /[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/.test(ch);

      return (
        containsUppercase(password) &&
        containsLowercase(password) &&
        containsSpecialChar(password) &&
        containsNumber(password)
      );
    }, 'Password must contain at least one uppercase character, one lowercase character, and one special character.'),
  terms: z
    .boolean()
    .refine(
      (value: boolean) => value === true,
      'You must agree to the Terms of Service and Privacy Policy.'
    ),
});

export type UserSignUpSchemaType = z.infer<typeof UserSignUpSchema>;
