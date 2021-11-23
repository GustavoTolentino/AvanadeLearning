import React from "react";
import { ListSixElementsWrapper } from "./styles/ListSixElementsWrapper";

<<<<<<< HEAD
export function ListSixElements({ title, children }) {
=======

export function ListSixElements({
  title,
  ...props
}) {
>>>>>>> d4354d0d943f158af7f7efe03870117183f2f8e7
  return (
    <ListSixElementsWrapper>
      <div className="TableWrapperHeader">
        <h1>{title}</h1>
      </div>
      <div className="TableWrapperBody">
        <table>{children}</table>
      </div>
    </ListSixElementsWrapper>
<<<<<<< HEAD
=======

>>>>>>> d4354d0d943f158af7f7efe03870117183f2f8e7
  );
}
// export function Table({ title, children }) {
//   return (
//     <TableWrapper>
//       <TableWrapper.Header>
//         <Text variant="subtitle" color="primaryText">
//           {title}
//         </Text>
//       </TableWrapper.Header>
//       <TableWrapper.Body>
//         <table>{children}</table>
//       </TableWrapper.Body>
//     </TableWrapper>
//   );
// }
