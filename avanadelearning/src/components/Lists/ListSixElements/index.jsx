import React from "react";
import { ListSixElementsWrapper } from "./styles/ListSixElementsWrapper";

export function ListSixElements({
  title,
  ...props
}) {
  return (
    <ListSixElementsWrapper>
      <table>
        <thead>
          <tr>
           
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </ListSixElementsWrapper>

export function Table({ title, children }) {
    return (
      <TableWrapper>
        <TableWrapper.Header>
          <Text variant="subtitle" color="primaryText">
            {title}
          </Text>
        </TableWrapper.Header>
        <TableWrapper.Body>
          <table>{children}</table>
        </TableWrapper.Body>
      </TableWrapper>
    );
  }
  );
}
