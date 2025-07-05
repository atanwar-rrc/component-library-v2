import styled from 'styled-components';

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#aaa' : '#222')};
  background: none;
  font-size: 1rem;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 0.2s;
`;
