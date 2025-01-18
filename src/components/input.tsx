'use client';

import React, { FC } from 'react';
import toTitleCase from '@/utils/titlecase';
import { InputProps } from '@/types/input';

const Input: FC<InputProps> = ({
  name,
  register,
  placeholder,
  type,
  errors,
  helperText,
}) => {
  return (
    <div className='form-control'>
      <label className='mb-1.5 font-bold' htmlFor={name}>
        {toTitleCase(name)}
      </label>
      {errors[name as keyof typeof errors] && (
        <span className='mb-2.5 text-sm text-rose-600'>
          {errors[name as keyof typeof errors]?.message}
        </span>
      )}
      <input
        className='input input-primary rounded-md border-gray-300 focus:outline-none'
        id={name}
        type={type}
        {...register(name as 'email' | 'password')}
        placeholder={placeholder}
      />
      {helperText && (
        <span className='label text-xs text-gray-400'>{helperText}</span>
      )}
    </div>
  );
};

export default Input;
