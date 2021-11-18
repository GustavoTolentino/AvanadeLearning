
import styled, { css } from 'styled-components';


export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 4px 4px 4px #121214;
    width: 250px;
    height: 90px;
    background-color: #121214;
    
    .icon{
        widht :60px;
        height: 60px;
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        align-items:center;
    }
    
    .icon img{
      width: 35px; 
    }
    
    .iText img{
      max-widht: 10px;
    }

    .iText{
      widht: 30px;
      heigt:30px;
      display:flex;
      align-items: center;

        
    }

    .tIcon{
      margin-top:20px;
      padding-left: 20px;
    }

    .iText p{
     
      font-family: 'poppins';
      font-size: 10px;
    }

   

    .tIcon p{
      font-family: 'poppins';
      font-size: 11px;
    }

  input {
    border: none;
    outline: none;
    color: #ffffff;
    background-color: transparent;
    padding: 18px 0;
  }

  &:focus-within {
    border: solid 2px #FB5700;

    svg {
      color: #FB5700;
    }
  }
 
`;
