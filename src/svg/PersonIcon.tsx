import { FC, SVGProps } from "react";

interface PersonIconProps extends SVGProps<SVGSVGElement> {}

const PersonIcon: FC<PersonIconProps> = ({ ...rest }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.476 12.3449C15.9837 11.4838 17 9.86059 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 9.86059 8.01627 11.4838 9.52399 12.3449C5.75742 13.4204 3 16.8882 3 21H21C21 16.8882 18.2426 13.4204 14.476 12.3449Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

export default PersonIcon;
