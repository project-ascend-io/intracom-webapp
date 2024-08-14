"use client";

import React, { FC } from "react";
import toTitleCase from "@/utils/titlecase";
import { InputProps } from "@/types/input";

const Input: FC<InputProps> = ({
  name,
  register,
  placeholder,
  type,
  errors,
  helperText,
}) => {
  return (
    <div className="form-control">
      <label className="font-bold mb-1.5" htmlFor={name}>
        {toTitleCase(name)}
      </label>
      {errors[name] && (
        <span className="text-rose-600 mb-2.5 text-sm">
          {errors[name]?.message}
        </span>
      )}
      <input
        className="input  border-gray-300 rounded-md input-primary focus:outline-none w-full max-w-sm"
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
      />
      {helperText && (
        <span className="label text-xs text-gray-400 w-full max-w-sm">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
