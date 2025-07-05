import React from "react";
import { render, screen } from "@testing-library/react";
import Herolmage from "./HeroImage";

describe("Herolmage", () => {
  it("renders title and subtitle", () => {
    render(<Herolmage title="Hero Title" subtitle="Subtitle" />);
    expect(screen.getByText("Hero Title")).toBeVisible();
    expect(screen.getByText("Subtitle")).toBeVisible();
  });

  it("applies disabled styles", () => {
    render(<Herolmage title="Disabled" disabled />);
    const hero = screen.getByText("Disabled").parentElement;
    expect(hero).toHaveStyle("opacity: 0.6");
    expect(hero).toHaveStyle("cursor: not-allowed");
  });
});
