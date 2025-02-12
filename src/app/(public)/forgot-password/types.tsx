import { z } from 'zod';

export type ForgotPasswordForm = {
  email: string
}

export const ForgotPasswordFormSchema = z.object({
  email: z.string().email()
});
