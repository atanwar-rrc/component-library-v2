import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroImage from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "HeroImage",
  component: HeroImage,
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    title: "Hero Title",
    subtitle: "This is a subtitle",
    disabled: false,
    children: <div>Extra content here.</div>,
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Hero",
    subtitle: "Subtitle",
    disabled: true,
    children: <div>Extra content here.</div>,
  },
};
