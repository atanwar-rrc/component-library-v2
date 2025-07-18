import React from "react";
import { StyledTable, StyledTh, StyledTd, StyledTfoot } from "./Table.styles";
import { TableProps } from "./Table.types";

const Table: React.FC<TableProps> = ({ disabled, headers, data, footer }) => (
  <StyledTable disabled={disabled}>
    <thead>
      <tr>
        {headers.map((header, i) => (
          <StyledTh key={i}>{header}</StyledTh>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, i) => (
            <StyledTd key={i}>{cell}</StyledTd>
          ))}
        </tr>
      ))}
    </tbody>
    {footer && (
      <StyledTfoot>
        <tr>
          {footer.map((foot, i) => (
            <StyledTd key={i}>{foot}</StyledTd>
          ))}
        </tr>
      </StyledTfoot>
    )}
  </StyledTable>
);

export default Table;
