import colors from "@/styles/colors";
import HeartIcon from "@/svg/HeartIcon";
import Logo from "@/svg/Logo";
import PersonIcon from "@/svg/PersonIcon";
import { FC } from "react"
import { styled } from "styled-components"

const TopBar: FC = () => {
  return (
    <Header>
      <Logo/>
      <ButtonGroup>
        <IconButton>
          <HeartIcon/>
        </IconButton>
        <IconButton>
          <PersonIcon/>
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
  padding-inline: 1rem;
  border-bottom: 1px solid ${colors.GRAY["01"]};
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-block: 1rem;

  button:first-child {
    margin-right: 0.75rem;
  }
`
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`