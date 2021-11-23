import React from "react";
import { ListSixElementsWrapper } from "./styles/ListSixElementsWrapper";

export function ListSixElements({ title, children }) {
  return (
    <ListSixElementsWrapper>
      <div className="TableWrapperHeader">
        <h1>{title}</h1>
      </div>
      <div className="TableWrapperBody">
        <table>{children}</table>
      </div>
    </ListSixElementsWrapper>
  );
}
