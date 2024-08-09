import theme from "@/app/theme";
import styled from "styled-components";

export const GoToHomeButton = styled.button`
  align-items: center;
  border-radius: 4px;
  width: 173px;
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 12px;
  color: ${theme.colors.textPrimary};
  background-color: #009edd;

  &:hover {
    background-color: #0073a1ff;
  }
`;

export default GoToHomeButton;
