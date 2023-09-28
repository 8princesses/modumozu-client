import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CaretIcon from "@/svg/CaretIcon";
import { FC } from "react";
import styled from "styled-components";

interface MenuListProps {
  menuName: string;
  handleClick: () => void;
}

const MenuList: FC<MenuListProps> = (props) => {
  const { menuName, handleClick } = props;
  return (
    <ListButton onClick={handleClick}>
      {menuName}
      <CaretIcon.right width={16} height={16} />
    </ListButton>
  );
};

const ListButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  background-color: ${colors.WHITE};
  ${getFonts("H5_MEDIUM")}
  color: ${colors.FONT_LIGHT.PRIMARY};
`;

export default MenuList;
