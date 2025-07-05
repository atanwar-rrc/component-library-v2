import styled from 'styled-components';

export const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  background: ${({ disabled }) => (disabled ? '#f3f3f3' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  font-size: 1rem;
  transition: background 0.2s, color 0.2s, opacity 0.2s;
`;
