import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders with title and children", () => {
    render(<Card title="My Card Title">Hello</Card>);
    expect(screen.getByText("My Card Title")).toBeVisible();
    expect(screen.getByText("Hello")).toBeVisible();
  });

  it("applies disabled styles", () => {
    render(<Card title="Disabled Card" disabled>Disabled Card</Card>);
    const card = screen.getByText("Disabled Card").parentElement;
    expect(card).toHaveStyle("opacity: 0.6");
    expect(card).toHaveStyle("cursor: not-allowed");
  });
});

