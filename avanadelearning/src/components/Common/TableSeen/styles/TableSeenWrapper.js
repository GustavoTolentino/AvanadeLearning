import styled, { css } from "styled-components";

export const TableSeenWrapper = styled.div`
  padding: 22px 17px;

  .tabletable {
    color: #ffffff;
  }

  details summary {
    background-color: #202024;
  }

  summary::before {
    content: "testes";
  }

  .check {
    background-color: red;
    /* appearance: none; */
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 9999px;
  }

  .lessonRow:before {
  }

  .lessonRow:after {
    content: "";
    display: block;
    border: 1px solid #000;
    width: 40px;
    height: 40px;
    margin: 5px auto;
    background-color: #ddd;
  }
  .lessonRow:before {
    content: "";
    display: block;
    border: 1px solid #000;
    width: 40px;
    height: 40px;
    margin: 5px auto;
    background-color: #ddd;
  }

  .check:checked {
    background-color: blue;
  }

  .checkColumn {
    display: flex;
    flex-direction: column;
  }
  .lessonRow {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .lessonRow p {
    margin-bottom: 0;
    margin-left: 5px;
  }
  /* input#show,
  input#hide {
    display: none;
  }

  span#content {
    display: none;
  }
  input#show:checked ~ span#content {
    display: block;
  }

  input#hide:checked ~ span#content {
    display: none;
  }
  input#hide::after {
    display: none;
  }
  input#show::after {
    display: none;
  }
  label::after {
    display: none;
  } */
`;
