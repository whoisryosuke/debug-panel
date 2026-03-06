import { DebugSelect, debugStore } from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import React, { ChangeEventHandler } from "react";
import sharedStyles from "../DebugInputShared.module.css";

type Props = DebugSelect;

const DebugSelectInput = ({ id, type, data }: Props) => {
  const updateStore = useSetAtom(debugStore);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
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
      <label htmlFor={id}>{id}</label>

      <select
        name={id}
        className={sharedStyles.InputBox}
        value={data.value}
        onChange={handleChange}
      >
        {data.items.map((item) => (
          <option value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  );
};

export default DebugSelectInput;
