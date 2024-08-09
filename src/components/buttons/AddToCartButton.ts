import theme from "@/app/theme";
import styled from "styled-components";

interface ButtonAddToCartProps {
  hasItems: boolean;
}

export const ButtonAddToCart = styled.button<ButtonAddToCartProps>`
  align-items: center;
  border-radius: 4px;
  height: 40px;
  width: 306px;
  display: flex;
  justify-content: center;
  padding: 8px;
  color: ${theme.colors.textPrimary};
  background-color: ${({ hasItems }) => (hasItems ? "#039B00" : "#009edd")};

  &:hover {
    background-color: ${({ hasItems }) =>
      hasItems ? "#039B00" : " #0073a1ff"};
  }

  @media screen and (max-width: 768px) {
    width: 296px;
  }
`;

export default ButtonAddToCart;
