import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("renders the text", () => {
    render(<Text>This is some text.</Text>);
    expect(screen.getByText("This is some text.")).toBeVisible();
  });

  it("applies disabled styles", () => {
    render(<Text disabled>Disabled text</Text>);
    const text = screen.getByText("Disabled text");
    expect(text).toHaveStyle("opacity: 0.6");
    expect(text).toHaveStyle("cursor: not-allowed");
  });
});
