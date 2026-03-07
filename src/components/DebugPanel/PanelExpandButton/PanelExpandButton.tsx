import CaretDownIcon from "@/components/icons/CaretDownIcon";
import React from "react";
import styles from "./PanelExpandButton.module.css";
import { useSetAtom } from "jotai/react";
import { debugStore } from "@/store/DebugStore";

type Props = {
  visible: boolean;
};

const PanelExpandButton = ({ visible }: Props) => {
  const updateStore = useSetAtom(debugStore);

  const handleToggle = () => {
    updateStore((prev) => ({
      ...prev,
      visible: !prev.visible,
    }));
  };

  return (
    <div className={styles.Container} data-visible={visible}>
      <button onClick={handleToggle}>
        <CaretDownIcon width={16} height={16} />
      </button>
    </div>
  );
};

export default PanelExpandButton;
