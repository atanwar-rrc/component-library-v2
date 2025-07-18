import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import RadioGroup from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("option1");
    return (
      <RadioGroup
        name="example"
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
