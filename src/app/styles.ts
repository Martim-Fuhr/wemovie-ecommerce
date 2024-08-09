import styled from "styled-components";
import theme from "@/app/theme";

export const NavList = styled.nav`
  min-height: 97vh;
`;

export const CardList = styled.ul`
  padding-top: 88px;
  display: flex;
  justify-content: center;
  background: ${theme.colors.background};
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 auto;
  flex-direction: row;
  max-width: 1080px;
  width: 100%;
`;

export const CardItem = styled.li`
  border-radius: 4px;
  background: ${theme.colors.backgroundSecondary};
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
  width: 340px;
  height: 350px;
  gap: 16px;
  padding: 0%;

  @media screen and (max-width: 768px) {
    width: 328px;
  }

  .item-title {
    color: ${theme.colors.blackLight};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.bold};
  }

  .item-price {
    color: ${theme.colors.blackPrice};
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.bold};
  }

  .qnt-items {
    font-size: ${theme.fontSizes.small};
    padding: 0 12px 0 6px;
  }
`;
