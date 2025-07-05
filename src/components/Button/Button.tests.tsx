import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeVisible();
  });

  it("applies disabled styles", () => {
    render(<Button disabled>Disabled Button</Button>);
    const btn = screen.getByText("Disabled Button");
    expect(btn).toHaveStyle("opacity: 0.6");
    expect(btn).toBeDisabled();
  });
});
