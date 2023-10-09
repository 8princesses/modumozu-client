import { FC, SVGProps } from "react";

interface PlusIcon extends SVGProps<SVGSVGElement> {}

const PlusIcon: FC<PlusIcon> = ({ ...rest }) => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33333 13.8333C7.33333 14.2015 7.63181 14.5 8 14.5C8.36819 14.5 8.66667 14.2015 8.66667 13.8333V9.16667H13.3333C13.7015 9.16667 14 8.86819 14 8.5C14 8.13181 13.7015 7.83333 13.3333 7.83333H8.66667V3.16667C8.66667 2.79848 8.36819 2.5 8 2.5C7.63181 2.5 7.33333 2.79848 7.33333 3.16667V7.83333H2.66667C2.29848 7.83333 2 8.13181 2 8.5C2 8.86819 2.29848 9.16667 2.66667 9.16667H7.33333V13.8333Z"
      fill="#2D5BEE"
    />
  </svg>
);

export default PlusIcon;
