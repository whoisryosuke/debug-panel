import { type HTMLProps, type PropsWithChildren } from "react";
import "./Stack.css";

type Props = HTMLProps<HTMLDivElement> & {
  horizontal?: boolean;
  gap?: string;
  centered?: boolean;
  responsive?: boolean;
};

const Stack = ({
  horizontal,
  centered,
  responsive,
  gap = "1rem",
  className,
  style,
  ...props
}: PropsWithChildren<Props>) => {
  const horizontalStyles = horizontal && "horizontal";
  const centeredStyles = centered && "centered";
  const responsiveStyles = responsive && "responsive";
  return (
    <div
      className={[
        "clw-stack",
        className,
        horizontalStyles,
        centeredStyles,
        responsiveStyles,
      ]
        .filter((n) => n)
        .join(" ")}
      style={
        {
          "--gap": gap,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export default Stack;
