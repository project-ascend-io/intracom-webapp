import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Please enter a email address' })
    .email('Invalid email address'),
  password: z.string({ required_error: 'Please enter a password' }),
});

//convert zod schema into typescript type
export type LoginFormType = z.infer<typeof loginSchema>;
