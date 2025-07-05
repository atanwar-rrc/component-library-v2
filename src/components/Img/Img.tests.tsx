import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Img", () => {
  it("renders img with alt text", () => {
    render(<Img src="img.png" alt="Sample" />);
    expect(screen.getByAltText("Sample")).toBeVisible();
  });

  it("applies disabled styles", () => {
    render(<Img src="img.png" alt="Disabled" disabled />);
    const img = screen.getByAltText("Disabled");
    expect(img).toHaveStyle("opacity: 0.6");
    expect(img).toHaveStyle("cursor: not-allowed");
  });
});
