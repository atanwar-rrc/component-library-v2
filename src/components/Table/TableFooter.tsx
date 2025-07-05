// src/components/Table/TableFooter.tsx
import React from 'react';
import styled from 'styled-components';

const StyledTfoot = styled.tfoot`
  background-color: #f9f9f9;
  font-weight: bold;
`;

const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledTfoot>{children}</StyledTfoot>;
};

export default TableFooter;
