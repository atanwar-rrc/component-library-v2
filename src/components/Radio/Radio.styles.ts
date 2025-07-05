import styled from "styled-components";

export const StyledRadio = styled.input.attrs({ type: "radio" })<{
  disabled?: boolean;
}>`
  accent-color: #1976d2;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  margin-right: 6px;
`;
