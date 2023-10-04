import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import HeartIcon from "@/svg/HeartIcon";
import React from "react";
import styled from "styled-components";

interface MyPageButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const MyPageButton = ({ children, handleClick }: MyPageButtonProps) => {
  return (
    <Button onClick={handleClick}>
      <div>{children}</div>
    </Button>
  );
};

const Button = styled.button`
  padding: 24px 20px;
  width: 50%;
  background-color: ${colors.GRAY[1]};
  border-radius: 16px;
  ${getFonts("H5_SEMIBOLD")}
  color: ${colors.FONT_LIGHT.PRIMARY};
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export default MyPageButton;
