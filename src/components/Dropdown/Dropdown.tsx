import React from "react";

interface DropdownProps {
  value: string;
  options: string[];
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, disabled, onChange }) => (
  <select
    value={value}
    disabled={disabled}
    onChange={(e) => onChange(e.target.value)}
    style={{ padding: "8px", borderRadius: "4px", cursor: disabled ? "not-allowed" : "pointer" }}
  >
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default Dropdown;
