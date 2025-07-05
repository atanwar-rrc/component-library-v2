import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Label from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "This is a label",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "This is a disabled label",
    disabled: true,
  },
};
