import styled from 'styled-components';

export const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  color: ${({ disabled }) => (disabled ? '#aaa' : '#222')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? 0.8 : 1)};
  margin-bottom: 16px;
`;

export const StyledTh = styled.th`
  border: 1px solid #e0e0e0;
  padding: 8px;
  font-weight: bold;
  background: #fafafa;
`;

export const StyledTd = styled.td`
  border: 1px solid #e0e0e0;
  padding: 8px;
`;

export const StyledTfoot = styled.tfoot`
  background: #f9f9f9;
`;
