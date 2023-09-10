import { FC } from "react";

interface HeartIconProps {
  color?: string;
}

const HeartIcon: FC<HeartIconProps> = ({ color = "#C9CDD2" }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 8.81387C22 15.3779 12.733 20.691 12.3384 20.9105C12.2344 20.9692 12.1181 21 12 21C11.8819 21 11.7656 20.9692 11.6616 20.9105C11.267 20.691 2 15.3779 2 8.81387C2.00165 7.27247 2.58541 5.7947 3.6232 4.70476C4.66099 3.61483 6.06806 3.00174 7.53571 3C9.37946 3 10.9937 3.8327 12 5.24022C13.0063 3.8327 14.6205 3 16.4643 3C17.9319 3.00174 19.339 3.61483 20.3768 4.70476C21.4146 5.7947 21.9983 7.27247 22 8.81387Z"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
