export interface RadioGroupOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioGroupOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean;
}
