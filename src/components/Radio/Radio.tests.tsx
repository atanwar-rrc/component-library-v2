import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "./Radio";

// Test 1: Radio is visible
test("Radio is visible", () => {
  render(<Radio>Radio Option</Radio>);
  expect(screen.getByText("Radio Option")).toBeInTheDocument();
});

// Test 2: Disabled radio has correct style
test("Disabled radio has correct style", () => {
  render(<Radio disabled>Disabled Radio</Radio>);
  const label = screen.getByText("Disabled Radio").closest("label");
  expect(label).toHaveStyle("opacity: 0.6");
  expect(label).toHaveStyle("cursor: not-allowed");
});
