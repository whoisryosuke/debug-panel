import { DebugItem, debugStore } from "@/store/DebugStore";
import { generateDefaultData } from "@/store/utils";
import { useAtomValue, useSetAtom } from "jotai/react";
import { useEffect } from "react";

export type UseDebugItem = {
  type: DebugItem["type"];
} & DebugItem["data"];

// const data = useDebug({ exampleProp: { type: "input", value: 4 } })
export function useDebug<T extends string>(items: Record<T, UseDebugItem>) {
  // Get the store and filter it by the user's keys (aka `T`)
  // and massage data into a nice object for user
  const store = useAtomValue(debugStore);
  const ids = Object.keys(items);
  const data = store.items
    .filter((item) => ids.includes(item.id))
    .reduce(
      (merge, prev) => ({
        ...merge,
        [prev.id]: prev.data.value,
      }),
      {} as Record<T, DebugItem["data"]["value"]>,
    );
  const updateStore = useSetAtom(debugStore);

  // First time? Add debug item to store.
  useEffect(() => {
    updateStore((prev) => {
      const newItems = Object.entries(items).map(([id, item]) => {
        const { type, ...data } = item as UseDebugItem;
        return {
          type,
          data: "value" in data ? data : generateDefaultData(type, data),
          id,
        } as DebugItem;
      });
      const updatedItems = [...prev.items, ...newItems];

      return {
        ...prev,
        items: updatedItems,
      };
    });

    return () => {
      const ids = Object.keys(items);
      updateStore((prev) => ({
        ...prev,
        items: prev.items.filter((item) => !ids.includes(item.id)),
      }));
    };
  }, []);

  return data;
}
