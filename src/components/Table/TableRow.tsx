// src/components/Table/TableRow.tsx
import React from 'react';
import styled from 'styled-components';

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledTr>{children}</StyledTr>;
};

export default TableRow;
