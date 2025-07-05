import styled from 'styled-components';

export const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  background: ${({ disabled }) => (disabled ? '#ddd' : '#1976d2')};
  color: ${({ disabled }) => (disabled ? '#999' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  font-size: 1rem;
  transition: background 0.2s, color 0.2s, opacity 0.2s;
`;