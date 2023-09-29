import colors from "@/styles/colors";
import HeartIcon from "@/svg/HeartIcon";
import Logo from "@/svg/Logo";
import PersonIcon from "@/svg/PersonIcon";
import { FC } from "react";
import { styled } from "styled-components";

const TopBar: FC = () => {
  return (
    <Header>
      <Logo />
      <ButtonGroup>
        <IconButton>
          <HeartIcon.fill />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </ButtonGroup>
    </Header>
  );
};

export default TopBar;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 16px;
  border-bottom: 1px solid ${colors.GRAY[1]};
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-block: 16px;

  button:first-child {
    margin-right: 12px;
  }
`;
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
