import { FC, SVGProps } from "react";

interface CaretProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const Right: FC<CaretProps> = ({ width = 24, height = 24, ...rest }) => (
  <svg
    width={`${width}`}
    height={`${height}`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.51457 5.29292C8.12405 5.68345 8.12405 6.31661 8.51457 6.70714L14.1714 12.364L8.51457 18.0208C8.12405 18.4114 8.12405 19.0445 8.51457 19.4351C8.9051 19.8256 9.53826 19.8256 9.92879 19.4351L16.2927 13.0711C16.6833 12.6806 16.6833 12.0474 16.2927 11.6569L9.92879 5.29292C9.53826 4.9024 8.9051 4.9024 8.51457 5.29292Z"
      fill="#1B1D1F"
    />
  </svg>
);

export default Object.assign(
  {},
  {
    right: Right,
  },
);
