import React from "react";
import Content from "./Content";
import { debugStore } from "../../store/DebugStore";
import { useAtomValue } from "jotai/react";
import styles from "./DebugPanel.module.css";

type Props = {
  bottom?: boolean;
  left?: boolean;
};

const DebugPanel = ({ bottom, left }: Props) => {
  const { visible } = useAtomValue(debugStore);
  return (
    <div
      className={[styles.Container, styles.Theme].join(" ")}
      data-visible={visible}
      data-position-x={left ? "left" : "right"}
      data-position-y={bottom ? "bottom" : "top"}
    >
      <Content />
    </div>
  );
};

export default DebugPanel;
