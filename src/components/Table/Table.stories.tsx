import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Table from "./Table";

const headers = ["Header 1", "Header 2", "Header 3"];
const data = [
  ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
  ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
];
const footer = ["Footer 1", "Footer 2", "Footer 3"];

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    headers: { control: "object" },
    data: { control: "object" },
    footer: { control: "object" },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers,
    data,
    footer,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers,
    data,
    footer,
    disabled: true,
  },
};
