import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div`
    
// .input{
//   color:#fff;
//   width: 178px;
//   height: 20px;
//   border-radius: 5px;
//   display: flex;
//   justify-content: flex-end;
//   border: 1px solid #121214;
//   background-color: #121214;
// }


// &:focus-within {
//     border: solid 2px #FB5700;

//     svg {
//       color: #FB5700;
//     }
//   }


display: flex;
align-items: center;
gap: 16px;  
background-color: #111111;
border: 1px solid  #111111;
border-radius: 5px;
padding: 0 18px;
font-size: 24px;
margin-bottom: 12px;
height: 35px;
/* width: 100% ; */
svg {
    color: #c1c1c1;
  }
input {
  border: none;
  outline: none;
  color: #ffffff;
  background-color: transparent;
  padding: 18px 0;
  width: 158px;
}

&:focus-within {
  border: solid 2px #FB5700;

  svg {
    color: #FB5700;
  }
}
 
`;
