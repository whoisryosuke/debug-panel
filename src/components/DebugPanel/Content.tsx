import { useAtomValue } from "jotai";
import React from "react";
import { debugStore } from "@/store/DebugStore";
import DebugInputComponent from "./inputs/DebugInputComponent";
import styles from "./DebugPanel.module.css";

type Props = {};

const Content = (props: Props) => {
  const { items } = useAtomValue(debugStore);
  const renderItems = items.map((item) => (
    <DebugInputComponent key={item.id} {...item} />
  ));
  return <div className={styles.Content}>{renderItems}</div>;
};

export default Content;
