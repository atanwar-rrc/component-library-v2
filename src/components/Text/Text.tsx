import React from "react";
import { StyledText } from "./Text.styles";
import type { TextProps } from "./Text.types";

const Text: React.FC<TextProps> = ({
  children,
  size = "medium",
  disabled = false,
}) => (
  <StyledText size={size} disabled={disabled}>
    {children}
  </StyledText>
);

export default Text;
