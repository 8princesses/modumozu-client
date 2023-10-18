import { FC, SVGProps } from "react";

interface NoUiProps extends SVGProps<SVGSVGElement> {}

const NoUi: FC<NoUiProps> = ({ ...rest }) => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d="M45.9258 37.333V10L13.3332 28V70H66.6665V28L45.9258 37.333Z" fill="#E8EBED" />
  </svg>
);
export default NoUi;
