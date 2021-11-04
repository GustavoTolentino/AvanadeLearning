import styled, { css } from 'styled-components';

const GhostButton = css`
  background-color: transparent;
  border: none;
  color: #ffffff;
`;
 
export const ButtonWrapper = styled.div`
  padding: 22px 17px;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  width: 100%;

  .fid{
    display: flex;
    align-items: center;
    justify-content: center;
    border: outset 2px blue;
    padding: 5px;
    width: 400px;
    height: 50px;
    background-color: #111111;
    border-radius: 7px;
    /* border: solid 1px #000000; */
    color: #ffffff;
    font-family: FontAwesome;
    content: "\f007";
}

  ${({ ghost, border, banner }) => {
    if (ghost) return GhostButton;
    if (border) return BorderButton;
    if (banner) return BannerButton;
    return DefaultButton;
  }};
`;

export const AdCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 360px;
  border-radius: 12px;
  color: #2f2e41;
  .footerCard {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 12px 24px;
    justify-content: space-between;
    background-color: #fff7ea;
    margin-top: 10px;
    border-radius: 0 0 12px 12px;
  }
  .interests {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .interests img {
    width: 25px;
    height: 25px;
    margin-left: 4px;
  }
  .image {
    width: 100%;
    height: 100%;
    padding: 24px;
    object-fit: cover;
    border-radius: 38px;
  }
  .contentTextInfo p,
  .contentTextInfo h2 {
    padding: 0 24px;
  }
  .contentTextInfo h2 {
    font-size: 24px;
  }
  .contentTextInfo p {
    font-size: 16px;
  }
`;