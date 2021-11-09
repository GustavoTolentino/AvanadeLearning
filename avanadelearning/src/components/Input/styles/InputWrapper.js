import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;  
  background-color: #111111;
  border: solid 2px #111111;
  border-radius: 7px;
  padding: 0 24px;
  font-size: 24px;
  margin-bottom: 24px;
  width: 100%;

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

// const GhostButton = css`
//   background-color: transparent;
//   border: none;
//   color: #ffffff;
// `;
 
// export const InputWrapper = styled.div`
//   padding: 22px 17px;
//   border-radius: 8px;
//   font-weight: 700;
//   font-family: 'Poppins', sans-serif;
//   cursor: pointer;
//   width: 100%;

  // .fid{
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   border: outset 2px blue;
  //   padding: 5px;
  //   width: 400px;
  //   height: 50px;
  //   background-color: #111111;
  //   border-radius: 7px;
  //   /* border: solid 1px #000000; */
  //   color: #ffffff;
  //   font-family: FontAwesome;
  //   content: "\f007";
// }

//   ${({ ghost, border, banner }) => {
//     if (ghost) return GhostButton;
//     if (border) return BorderButton;
//     if (banner) return BannerButton;
//     return DefaultButton;
//   }};
// `;