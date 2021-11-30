import styled, { css } from "styled-components";

export const TableSeenWrapper = styled.div`
  padding: 22px 17px;

  .tabletable {
    color: #ffffff;
  }
  /* 
  body {
    display: block;
  }
  .span3 input:focus ~ .alert {
    display: none;
  }
  .span2 input:focus ~ .alert {
    display: block;
  }
  .inputShow::focus ~ .alert {
    display: block;
  }
  .inputHide::focus ~ .alert {
    display: none;
  }

  .alert {
    display: block;
  } */
  input#show,
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
  }
`;
