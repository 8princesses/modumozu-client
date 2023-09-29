import { FC, SVGProps } from "react";

interface IngIconProps extends SVGProps<SVGSVGElement> {}

const IngIcon: FC<IngIconProps> = ({ ...rest }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16" cy="16" r="14" fill="#2D5BEE" />
      <ellipse cx="9.33301" cy="16" rx="2" ry="2" fill="white" fillOpacity="0.24" />
      <circle cx="16" cy="16" r="2" fill="white" fillOpacity="0.56" />
      <circle cx="22.667" cy="16" r="2" fill="white" />
    </svg>
  );
};

export default IngIcon;
