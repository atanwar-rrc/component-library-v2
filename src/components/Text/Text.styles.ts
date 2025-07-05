import styled from "styled-components";
import type { TextProps } from "./Text.types";

export const StyledText = styled.span<TextProps>`
  font-size: ${({ size }) =>
    size === "small"
      ? "12px"
      : size === "large"
      ? "20px"
      : "16px"};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#222")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
