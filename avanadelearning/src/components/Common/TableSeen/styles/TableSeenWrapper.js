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
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    margin-bottom: 11.5px;
  }
  .lessonRow div {
    width: 2px;
    height: 15px;
    background-color: burlywood;
  }
  .lessonRow:after {
    /* content: "";
    display: block;
    border: 1px solid #000;
    width: 40px;
    height: 40px;
    margin: 5px auto;
    background-color: #ddd; */
  }
  .lessonRow:before {
    /* content: "";
    display: block;
    border: 1px solid #000;
    width: 40px;
    height: 40px;
    margin: 5px auto;
    background-color: #ddd; */
    position: relative;
    content: "";
    width: 2px;
    height: 16px;
    top: -14px;
    left: 6px;
    background-color: red;
  }

  .check:checked {
    background-color: blue;
    :before {
      background-color: blue;
    }
  }

  /* &:focus-within {
    background-color: blue;

    :before {
      background-color: blue;
    }
  } */

  .checkColumn {
    display: flex;
    flex-direction: column;
  }
  .lessonRow {
    display: flex;
    width: 100%;
    justify-content: flex-start;
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

  li button {
    position: relative;
    cursor: pointer;
    width: 10px !important;
    height: 10px;
    border: 0px;
    border-radius: 50%;
    margin-right: 30px;
    flex-shrink: 0;
    z-index: 2;
    transition: box-shadow 0.2s ease 0s;
    background: rgb(4, 211, 97);
  }
  li button:before {
    background: rgb(32, 32, 36);
    border: 2px solid rgb(4, 211, 97);
    border-radius: 50%;

    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
  }
  li button:after {
    background: rgb(4, 211, 97);
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: 50%;
  }
  ul {
    list-style-type: none;
  }
`;
