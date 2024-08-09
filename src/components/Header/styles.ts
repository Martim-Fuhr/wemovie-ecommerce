import styled from "styled-components";
import theme from "@/app/theme";

export const HeaderSection = styled.header`
  align-items: center;
  background-color: ${theme.colors.background};
  color: ${theme.colors.textPrimary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 88px;
  max-width: 1920px;
  position: fixed;
  width: 100%;

  .align-header {
    max-width: 1084px;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  h1 {
    padding-left: 20px;
    color: ${theme.colors.textPrimary};
    font-size: ${theme.fontSizes.semiLarge};
    font-weight: ${theme.fontWeights.semiBold};

    @media screen and (max-width: 768px) {
      padding-left: 8px;
    }
  }
`;

export const CartWrapper = styled.div`
  color: ${theme.colors.textPrimary};
  display: flex;
  flex-direction: row;
  font-size: 17px;
  white-space: nowrap;

  .my-cart {
    color: ${theme.colors.textPrimary};
    font-size: ${theme.fontSizes.default};
    font-weight: ${theme.fontWeights.semiBold};

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile-item {
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }

  span {
    align-self: end;
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.semiBold};
  }

  svg {
    margin: 8px;
  }
`;
