import React, { useState } from "react";
import { TableSeenWrapper } from "./styles/TableSeenWrapper";
import { Button } from "../Button";

export function TableSeen({ lessonTitle, children }) {
  const [listLesson, setListLesson] = useState("");
  return (
    <TableSeenWrapper>
      <div className="tabletable">
        {/* <label for="show">
          <span>Teste</span>
        </label>
        <input type="radio" id="show" name="group" />
        <label for="hide">
          <span>Testando</span>
        </label>
        <input type="radio" id="hide" name="group" />
        <span id="content">Content</span> */}

        <details open>
          <summary>{lessonTitle}</summary>
          <div className="checkColumn">
            {/* {listLesson.map((item) => (
              <Button key={item.idInstituicao} listSeen></Button>
            ))} */}
            {/* <Button listSeen></Button> */}
            <div className="lessonRow">
              <input className="check" type="checkbox"></input>
              <p>1 Aula react</p>
            </div>
            <input className="check" type="checkbox"></input>
            <input className="check" type="checkbox"></input>
          </div>
          <p></p>
        </details>
      </div>
    </TableSeenWrapper>
  );
}
