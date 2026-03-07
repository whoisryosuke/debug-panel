import { DebugPiano, debugStore, PianoInput } from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import sharedStyles from "../DebugInputShared.module.css";
import styles from "./DebugPianoInput.module.css";
import { Stack } from "../../../..";

type Props = DebugPiano;

const DebugPianoInput = ({ id, type, data }: Props) => {
  const updateStore = useSetAtom(debugStore);

  const handleChange = (inputKey: keyof PianoInput, pressed: boolean) => () => {
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
                value: {
                  ...item.data.value,
                  [inputKey]: pressed,
                },
              },
            }
          : item,
      ),
    }));
  };

  return (
    <div className={sharedStyles.FormField}>
      <label htmlFor={id}>{id}</label>
      <Stack>
        <button
          className={styles.WhiteKey}
          data-selected={data.value.c}
          onMouseDown={handleChange("c", true)}
          onMouseUp={handleChange("c", false)}
        >
          C
        </button>
        <button className={styles.WhiteKey}>D</button>
        <button className={styles.WhiteKey}>E</button>
        <button className={styles.WhiteKey}>F</button>
        <button className={styles.WhiteKey}>G</button>
        <button className={styles.WhiteKey}>A</button>
        <button className={styles.WhiteKey}>B</button>
      </Stack>
    </div>
  );
};

export default DebugPianoInput;
