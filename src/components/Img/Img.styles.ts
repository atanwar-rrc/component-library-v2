import styled from "styled-components";

export const StyledImg = styled.img<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  filter: ${({ disabled }) => (disabled ? "grayscale(80%)" : "none")};
  transition:
    opacity 0.2s,
    filter 0.2s;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
