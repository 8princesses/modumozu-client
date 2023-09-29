import { FC, SVGProps } from "react";

interface CheckBackgroundProps extends SVGProps<SVGSVGElement> {}

const CheckBackground: FC<CheckBackgroundProps> = ({ ...rest }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <circle cx="16" cy="16" r="14" fill="#2D5BEE" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929C22.3166 10.9024 21.6834 10.9024 21.2929 11.2929L14 18.5858L10.7071 15.2929C10.3166 14.9024 9.68342 14.9024 9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071L13.0641 20.4783C13.1031 20.5173 13.1444 20.5523 13.1877 20.5835C13.2189 20.6268 13.254 20.6682 13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071L22.7071 12.7071Z"
      fill="white"
    />
  </svg>
);

export default CheckBackground;
