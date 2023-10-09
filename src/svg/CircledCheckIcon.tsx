import { FC, SVGProps } from "react";

interface CircledCheckIconProps extends SVGProps<SVGSVGElement> {}

const CircledCheckIcon: FC<CircledCheckIconProps> = ({ ...rest }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <circle cx="12.3334" cy="12" r="10.5" fill="#2D5BEE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5405 9.70711C17.931 9.31658 17.931 8.68342 17.5405 8.29289C17.15 7.90237 16.5168 7.90237 16.1263 8.29289L10.8334 13.5858L8.54048 11.2929C8.14996 10.9024 7.51679 10.9024 7.12627 11.2929C6.73574 11.6834 6.73574 12.3166 7.12627 12.7071L9.95469 15.5355C9.98373 15.5646 10.0141 15.5915 10.0456 15.6162C10.0704 15.6477 10.0972 15.6781 10.1263 15.7071C10.5168 16.0976 11.15 16.0976 11.5405 15.7071L17.5405 9.70711Z"
      fill="white"
    />
  </svg>
);
export default CircledCheckIcon;
