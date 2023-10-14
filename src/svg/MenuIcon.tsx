import { FC, SVGProps } from "react";
import styled from "styled-components";

interface MenuIconProps extends SVGProps<SVGSVGElement> {}

const MenuIcon: FC<MenuIconProps> = ({ ...rest }) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.25 4.5835C11.25 5.27385 10.6904 5.8335 10 5.8335C9.30964 5.8335 8.75 5.27385 8.75 4.5835C8.75 3.89314 9.30964 3.3335 10 3.3335C10.6904 3.3335 11.25 3.89314 11.25 4.5835ZM11.25 10.0002C11.25 10.6905 10.6904 11.2502 10 11.2502C9.30964 11.2502 8.75 10.6905 8.75 10.0002C8.75 9.30981 9.30964 8.75016 10 8.75016C10.6904 8.75016 11.25 9.30981 11.25 10.0002ZM10 16.6668C10.6904 16.6668 11.25 16.1072 11.25 15.4168C11.25 14.7265 10.6904 14.1668 10 14.1668C9.30964 14.1668 8.75 14.7265 8.75 15.4168C8.75 16.1072 9.30964 16.6668 10 16.6668Z"
      fill="#9EA4AA"
    />
  </Svg>
);
export default MenuIcon;

const Svg = styled.svg`
  cursor: pointer;
`;
