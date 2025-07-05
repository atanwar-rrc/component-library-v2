import React from "react";
import type { RadioProps } from "./Radio.types";

const Radio: React.FC<RadioProps> = ({ checked = false, disabled = false, children }) => (
  <label style={{ opacity: disabled ? 0.6 : 1, cursor: disabled ? "not-allowed" : "pointer" }}>
    <input type="radio" checked={checked} disabled={disabled} readOnly />
    {children}
  </label>
);

export default Radio;
