import React from "react";
import "./index.scss";

interface Props {
  className?: string;
  onClick: (e: any) => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
