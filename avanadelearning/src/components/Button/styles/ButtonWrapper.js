import styled, { css } from 'styled-components';

const GhostButton = css`
  background-color: transparent;
  border: none;
  color: #ffffff;
`;
const BorderButton = css`
  border: 2px solid #FB5700;
  background-color: transparent;
  color: #FB5700;
`;
const BannerButton = css`
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
`;
const DefaultButton = css`
  background-color: #FB5700;
  border: none;
  color: #ffffff;
`;
export const ButtonWrapper = styled.button`
  padding: 22px 17px;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  width: 100%;
  ${({ ghost, border, banner }) => {
    if (ghost) return GhostButton;
    if (border) return BorderButton;
    if (banner) return BannerButton;
    return DefaultButton;
  }};
`;