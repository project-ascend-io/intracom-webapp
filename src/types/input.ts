import { InputHTMLAttributes } from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { LoginFormType } from './login';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  type: string;
  helperText?: string;
  // these props are used in conjunction with react-hook-form
  register: UseFormRegister<LoginFormType>;
  errors: FieldErrors<LoginFormType>;
}
