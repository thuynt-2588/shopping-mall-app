import React from "react";
import { clsx } from "clsx";
import "./index.scss";

type Props = {
  value?: string;
  label?: string;
  required?: boolean;
  name?: string;
  className?: string;
  placeholder?: string;
  type: string;
  onChange: (e: any) => void;
  errors?: string[];
};

export const Input: React.FC<Props> = ({
  value,
  label,
  required,
  name,
  className,
  placeholder,
  type,
  onChange,
  errors,
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor="input-field">
          {label}
          <span className={clsx(required || false, "required")}>*</span>
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />

      <span className="error">{errors}</span>
    </div>
  );
};

export default Input;
