import React from "react";
import { TableSeenWrapper } from "./styles/TableSeenWrapper";

export function TableSeen({ children }) {
  return (
    <TableSeenWrapper>
      <div className="tabletable">
        {/* <input className="inputHide" type="text" placeholder="Hide Me"></input>
        <input className="inputShow" type="text" placeholder="Show Me"></input>
        <p className="alert">Some alarming information here</p> */}

        <label for="show">
          <span>Teste</span>
        </label>
        <input type="radio" id="show" name="group" />
        <label for="hide">
          <span>Testando</span>
        </label>
        <input type="radio" id="hide" name="group" />
        <span id="content">Content</span>
      </div>
    </TableSeenWrapper>
  );
}
