import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RadioGroup from "./RadioGroup";

describe("RadioGroup", () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  it("renders all radio options", () => {
    render(
      <RadioGroup
        name="test"
        options={options}
        value="option1"
        onChange={() => {}}
      />,
    );
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
  });

  it("calls onChange when selecting a radio option", () => {
    const handleChange = jest.fn();
    render(
      <RadioGroup
        name="test"
        options={options}
        value="option1"
        onChange={handleChange}
      />,
    );
    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(handleChange).toHaveBeenCalledWith("option2");
  });
});
