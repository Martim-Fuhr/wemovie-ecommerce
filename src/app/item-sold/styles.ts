import styled from "styled-components";
import theme from "@/app/theme";

export const SectionItemSold = styled.section`
  align-items: center;
  background-color: ${theme.colors.backgroundSecondary};
  border-radius: 4px;
  padding-top: 88px;
  min-height: 97vh;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1084px;
  width: 90%;

  h3 {
    color: ${theme.colors.blackPrice};
    font-size: ${theme.fontSizes.semiLarge};
    font-weight: ${theme.fontWeights.bold};
    text-align: center;

    @media screen and (max-width: 768px) {
      padding: 0 40px;
    }
  }
`;
