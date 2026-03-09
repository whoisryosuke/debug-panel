import { DebugCheckbox, debugStore } from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import { ChangeEventHandler } from "react";
import sharedStyles from "../DebugInputShared.module.css";
import styles from "./DebugCheckboxInput.module.css";
import CheckIcon from "@/components/icons/CheckIcon";

type Props = DebugCheckbox;

const DebugCheckboxInput = ({ id, type, data }: Props) => {
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
                value: e.currentTarget.checked,
              },
            }
          : item,
      ),
    }));
  };

  return (
    <div className={sharedStyles.FormField}>
      <label htmlFor={id}>{id}</label>

      <div className={styles.Container} data-checked={data.value}>
        <input
          name={id}
          type="checkbox"
          className={styles.Checkbox}
          checked={data.value}
          onChange={handleChange}
        />
        <CheckIcon className={styles.Icon} />
      </div>
    </div>
  );
};

export default DebugCheckboxInput;
