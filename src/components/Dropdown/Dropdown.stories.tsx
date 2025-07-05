import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface DropdownProps {
  value: string;
  options: string[];
  disabled?: boolean;
  onChange?: (val: string) => void;
}

const optionsList = ["Apple", "Banana", "Orange"];

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export const Default = (args: DropdownProps) => {
  const [value, setValue] = useState(args.value ?? optionsList[0]);
  return (
    <Dropdown
      {...args}
      value={value}
      onChange={(val: string) => setValue(val)}
      options={args.options ?? optionsList}
    />
  );
};
Default.args = {
  options: optionsList,
  value: optionsList[0],
  disabled: false,
};
