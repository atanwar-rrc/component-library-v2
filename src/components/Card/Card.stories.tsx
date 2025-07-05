import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3>Card Title</h3>
        <div>Some content here.</div>
      </>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <h3>Disabled Card</h3>
        <div>Some content here.</div>
      </>
    ),
    disabled: true,
  },
};
