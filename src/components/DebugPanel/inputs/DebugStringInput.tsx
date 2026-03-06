import { DebugInput, debugStore } from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import React, { ChangeEventHandler } from "react";
import sharedStyles from "./DebugInputShared.module.css";

type Props = DebugInput;

const DebugStringInput = ({ id, type, data }: Props) => {
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
                value: e.currentTarget.value,
              },
            }
          : item,
      ),
    }));
  };

  return (
    <div className={sharedStyles.FormField}>
      <h3>{id}</h3>
      <input
        className={sharedStyles.InputBox}
        type="text"
        value={data.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DebugStringInput;
