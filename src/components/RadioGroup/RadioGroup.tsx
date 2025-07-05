import React from "react";

export interface RadioGroupProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  disabled = false,
}) => (
  <div>
    {options.map((option) => (
      <label key={option.value} style={{ marginRight: "1em" }}>
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          disabled={disabled}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default RadioGroup;
