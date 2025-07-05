// src/components/Table/TableCell.tsx
import React from 'react';
import styled from 'styled-components';

const StyledTd = styled.td<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  padding: 8px;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#222')};
  background: ${({ disabled }) => (disabled ? '#f3f3f3' : 'white')};
`;

const TableCell: React.FC<{ children: React.ReactNode; disabled?: boolean }> = ({ children, disabled }) => {
  return <StyledTd disabled={disabled}>{children}</StyledTd>;
};

export default TableCell;
