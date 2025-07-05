import React from "react";

export interface LabelProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, disabled = false }) => (
  <span
    style={{
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    {children}
  </span>
);

export default Label;
