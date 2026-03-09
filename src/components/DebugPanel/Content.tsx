import { useAtomValue } from "jotai";
import { debugStore } from "@/store/DebugStore";
import DebugInputComponent from "./inputs/DebugInputComponent";
import styles from "./DebugPanel.module.css";

const Content = () => {
  const { items } = useAtomValue(debugStore);
  const renderItems = items.map((item) => (
    <DebugInputComponent key={item.id} {...item} />
  ));
  return <div className={styles.Content}>{renderItems}</div>;
};

export default Content;
