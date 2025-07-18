// src/components/Table/TableHeader.tsx
import React from "react";
import styled from "styled-components";

const StyledThead = styled.thead`
  background-color: #f4f4f4;
`;

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledThead>{children}</StyledThead>;
};

export default TableHeader;
