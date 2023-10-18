import { FC, SVGProps } from "react";

interface CheckBackgroundProps extends SVGProps<SVGSVGElement> {
  type?: "primary" | "secondary";
}

const Primary: FC<CheckBackgroundProps> = ({ type = "primary", ...rest }) => {
  if (type === "primary") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3871 12.0238C23.7684 11.6243 23.7535 10.9913 23.354 10.61C22.9544 10.2288 22.3214 10.2436 21.9401 10.6431L13.7508 19.2254L9.98599 15.2799C9.60472 14.8803 8.98656 14.8803 8.60529 15.2799C8.22402 15.6795 8.22402 16.3273 8.60529 16.7268L12.8066 21.1297C12.8434 21.1683 12.8825 21.2032 12.9233 21.2343C12.9625 21.2921 13.0084 21.3466 13.061 21.3968C13.4606 21.7781 14.0936 21.7633 14.4748 21.3637L23.3871 12.0238Z"
          fill="#2D5BEE"
        />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3871 12.0238C23.7684 11.6243 23.7535 10.9913 23.354 10.61C22.9544 10.2288 22.3214 10.2436 21.9401 10.6431L13.7508 19.2254L9.98599 15.2799C9.60472 14.8803 8.98656 14.8803 8.60529 15.2799C8.22402 15.6795 8.22402 16.3273 8.60529 16.7268L12.8066 21.1297C12.8434 21.1683 12.8825 21.2032 12.9233 21.2343C12.9625 21.2921 13.0084 21.3466 13.061 21.3968C13.4606 21.7781 14.0936 21.7633 14.4748 21.3637L23.3871 12.0238Z"
        fill="#C9CDD2"
      />
    </svg>
  );
};

const Background: FC<CheckBackgroundProps> = ({ type = "primary", ...rest }) => {
  if (type === "primary") {
    return (
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
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16" cy="16" r="14" fill="#C9CDD2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929C22.3166 10.9024 21.6834 10.9024 21.2929 11.2929L14 18.5858L10.7071 15.2929C10.3166 14.9024 9.68342 14.9024 9.29289 15.2929C8.90237 15.6834 8.90237 16.3166 9.29289 16.7071L13.0641 20.4783C13.1031 20.5173 13.1444 20.5523 13.1877 20.5835C13.2189 20.6268 13.254 20.6682 13.2929 20.7071C13.6834 21.0976 14.3166 21.0976 14.7071 20.7071L22.7071 12.7071Z"
        fill="white"
      />
    </svg>
  );
};

export default Object.assign(Primary, {
  background: Background,
});
