import { DebugRange, debugStore } from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import React, { ChangeEventHandler } from "react";
import sharedStyles from "./DebugInputShared.module.css";
import styles from "./DebugRangeInput.module.css";

type Props = DebugRange;

const DebugRangeInput = ({ id, type, data }: Props) => {
  const updateStore = useSetAtom(debugStore);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateStore((prev) => ({
      ...prev,
      // Update the specific input inside store by ID
      // Immutable state + arrays + nested objects, it's a doozy every time
      items: prev.items.map((item) =>
        item.id == id && item.type == type
          ? {
              ...item,
              data: {
                ...item.data,
                value: parseInt(e.currentTarget.value),
              },
            }
          : item,
      ),
    }));
  };

  return (
    <div className={sharedStyles.FormField}>
      <label htmlFor={id}>{id}</label>
      <input
        name={id}
        className={styles.Range}
        type="range"
        min={data.min}
        max={data.max}
        step={data.step}
        value={data.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DebugRangeInput;
