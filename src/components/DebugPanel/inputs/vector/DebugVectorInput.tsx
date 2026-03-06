import {
  DebugInput,
  debugStore,
  DebugVector3D,
  DebugVector4D,
  Vector4D,
} from "@/store/DebugStore";
import { useSetAtom } from "jotai/react";
import React, { ChangeEventHandler } from "react";
import sharedStyles from "../DebugInputShared.module.css";
import Stack from "@/components/primitives/Stack/Stack";

type Props = DebugVector3D | DebugVector4D;

const DebugVectorInput = ({ id, type, data }: Props) => {
  const updateStore = useSetAtom(debugStore);

  const handleChange =
    (inputKey: keyof Vector4D): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
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
                    [inputKey]: parseFloat(e.currentTarget.value),
                  },
                },
              }
            : item,
        ),
      }));
    };

  return (
    <div className={sharedStyles.FormField}>
      <label>{id}</label>
      <Stack horizontal className={sharedStyles.InputBox} gap="var(--space-1)">
        <input
          name={`${id}-x`}
          className={sharedStyles.NestedInput}
          type="number"
          value={data.value.x}
          onChange={handleChange("x")}
        />
        <input
          name={`${id}-y`}
          className={sharedStyles.NestedInput}
          type="number"
          value={data.value.y}
          onChange={handleChange("y")}
        />
        <input
          name={`${id}-z`}
          className={sharedStyles.NestedInput}
          type="number"
          value={data.value.z}
          onChange={handleChange("z")}
        />
        {type === "vec4" && (
          <input
            name={`${id}-w`}
            className={sharedStyles.NestedInput}
            type="number"
            value={data.value.w}
            onChange={handleChange("w")}
          />
        )}
      </Stack>
    </div>
  );
};

export default DebugVectorInput;
