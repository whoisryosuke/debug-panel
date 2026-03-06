import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
  </svg>
);

export default CheckIcon;
