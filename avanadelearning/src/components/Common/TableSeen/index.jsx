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
          <ul>
            <li>
              <button></button>
              <a>1 React.js criando a solução</a>
            </li>
          </ul>
        </details>
      </div>
    </TableSeenWrapper>
  );
}
