import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, onClick }) => (
  <button
    disabled={disabled}
    style={{
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
