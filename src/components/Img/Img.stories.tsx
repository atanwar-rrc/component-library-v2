import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Img";

const meta: Meta<typeof Img> = {
  component: Img,
};
export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "myimg.jpeg",
    alt: "Placeholder image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "myimg.jpeg",
    alt: "Disabled image",
    disabled: true,
  },
};
