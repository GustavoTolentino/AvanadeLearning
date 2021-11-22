import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div`
    
.input{
    display: flex;
    color:#121214;
    width: 178px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #121214;
    background-color: #121214;
}



.icon{
    color: #ffff
    width: 35px; 
    
}

&:focus-within {
    border: solid 2px #FB5700;

    svg {
      color: #FB5700;
    }
  }
 
`;
