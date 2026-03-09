import { DebugPiano, debugStore, PianoInput } from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import sharedStyles from "../DebugInputShared.module.css";
import DebugPianoInputKey from "./DebugPianoInputKey";
import Stack from "@/components/primitives/Stack/Stack";

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
      <Stack horizontal gap="var(--space-1)">
        <DebugPianoInputKey
          note="c"
          state={data.value}
          handleChange={handleChange}
        />
        <DebugPianoInputKey
          note="d"
          state={data.value}
          handleChange={handleChange}
        />
        <DebugPianoInputKey
          note="e"
          state={data.value}
          handleChange={handleChange}
        />
        <DebugPianoInputKey
          note="f"
          state={data.value}
          handleChange={handleChange}
        />
        <DebugPianoInputKey
          note="g"
          state={data.value}
          handleChange={handleChange}
        />
        <DebugPianoInputKey
          note="a"
          state={data.value}
          handleChange={handleChange}
        />
        <DebugPianoInputKey
          note="b"
          state={data.value}
          handleChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default DebugPianoInput;
