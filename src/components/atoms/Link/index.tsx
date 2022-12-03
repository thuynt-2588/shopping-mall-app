import React from "react";
import "./index.scss";

interface Props {
  href: string;
  className?: string;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ href, className, children, onClick }) => {
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
