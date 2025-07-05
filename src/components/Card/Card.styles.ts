import styled, { css } from "styled-components";

export const StyledCard = styled.div<{ disabled?: boolean }>`
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  margin: 16px;
  transition: box-shadow 0.2s, opacity 0.2s, background 0.2s;
  ${({ disabled }) =>
    disabled
      ? css`
          background: #f5f5f5;
          color: #bdbdbd;
          cursor: not-allowed;
          opacity: 0.6;
          box-shadow: none;
        `
      : css`
          cursor: pointer;
          &:hover {
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          }
        `}
`;
