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

const Down: FC<CaretProps> = ({ width = 24, height = 24, ...rest }) => (
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
      d="M4.77917 8.30689C5.16196 7.90879 5.795 7.89637 6.19311 8.27917L12 13.8627L17.8069 8.27917C18.205 7.89637 18.838 7.90879 19.2208 8.30689C19.6036 8.705 19.5912 9.33804 19.1931 9.72083L12.6931 15.9708C12.306 16.3431 11.694 16.3431 11.3069 15.9708L4.80689 9.72083C4.40879 9.33804 4.39637 8.705 4.77917 8.30689Z"
      fill="#1B1D1F"
    />
  </svg>
);

export default Object.assign(
  {},
  {
    right: Right,
    down: Down,
  },
);
