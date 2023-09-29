import { FC, SVGProps } from "react";

interface NumberMarkIconProps extends SVGProps<SVGSVGElement> {}

const One: FC<NumberMarkIconProps> = ({ ...rest }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16" cy="16" r="14" fill="#E8EBED" />
      <path
        d="M17.416 10.2667V21.5792H15.0566V12.5011H14.9941L12.4004 14.1261V12.048L15.1973 10.2667H17.416Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

const Two: FC<NumberMarkIconProps> = ({ ...rest }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16" cy="16" r="14" fill="#E8EBED" />
      <path
        d="M12.0079 21.3334L11.9923 19.6302L16.0548 15.8959C17.1173 14.8802 17.6798 14.2552 17.6798 13.3646C17.6798 12.3646 16.9142 11.7396 15.8829 11.7396C14.8204 11.7396 14.1329 12.4115 14.1329 13.4896H11.8985C11.8829 11.2709 13.5235 9.86462 15.9142 9.86462C18.336 9.86462 19.9454 11.2396 19.9454 13.2084C19.9454 14.4896 19.3204 15.5521 16.9923 17.6615L15.2735 19.3334V19.3959H20.1017V21.3334H12.0079Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

const Three: FC<NumberMarkIconProps> = ({ ...rest }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16" cy="16" r="14" fill="#E8EBED" />
      <path
        d="M15.9687 21.4896C13.4844 21.4896 11.7031 20.1146 11.6562 18.1459H14.0312C14.0781 18.9896 14.8906 19.5521 15.9844 19.5521C17.1094 19.5521 17.9219 18.9115 17.9062 18.0052C17.9219 17.0834 17.0937 16.4271 15.7656 16.4271H14.7187V14.6927H15.7656C16.875 14.6927 17.6562 14.0834 17.6562 13.1927C17.6562 12.3334 17 11.7396 16 11.7396C15 11.7396 14.1719 12.3021 14.1406 13.1615H11.8906C11.9219 11.2084 13.6875 9.86462 16 9.86462C18.3594 9.86462 19.9375 11.2552 19.9219 13.0521C19.9375 14.3177 19.0469 15.224 17.7812 15.4427V15.5365C19.4375 15.7396 20.3594 16.7552 20.3437 18.1615C20.3594 20.099 18.5156 21.4896 15.9687 21.4896Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

const Four: FC<NumberMarkIconProps> = ({ ...rest }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16" cy="16" r="14" fill="#E8EBED" />
      <path
        d="M11.3701 19.3334V17.474L16.1514 10.0209H19.1045V17.4427H20.542V19.3334H19.1045V21.3334H16.8701V19.3334H11.3701ZM13.7451 17.4427H16.9014V12.599H16.792L13.7451 17.349V17.4427Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

export default Object.assign(
  {},
  {
    one: One,
    two: Two,
    three: Three,
    four: Four,
  },
);
