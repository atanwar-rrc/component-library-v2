import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is some sample text.",
    size: "medium",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled text.",
    size: "medium",
    disabled: true,
  },
};
