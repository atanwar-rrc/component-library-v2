import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  it("renders children", () => {
    render(<Label>This is a label</Label>);
    expect(screen.getByText("This is a label")).toBeVisible();
  });

  it("applies disabled styles", () => {
    render(<Label disabled>This is a disabled label</Label>);
    const label = screen.getByText("This is a disabled label");
    expect(label).toHaveStyle("opacity: 0.6");
    expect(label).toHaveStyle("cursor: not-allowed");
  });
});
