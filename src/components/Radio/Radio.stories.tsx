import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: "Option 1",
    checked: false,
    disabled: false,
  }
};

export const Checked: Story = {
  args: {
    children: "Checked Option",
    checked: true,
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    children: "Disabled Option",
    checked: false,
    disabled: true,
  }
};
