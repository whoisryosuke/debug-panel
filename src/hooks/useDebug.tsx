import { DebugItem, debugStore, DebugValueMap } from "@/store/DebugStore";
import { generateDefaultData } from "@/store/utils";
import { useAtomValue, useSetAtom } from "jotai/react";
import { useEffect } from "react";

export type UseDebugItem = {
  [K in DebugItem["type"]]: { type: K } & Partial<
    Extract<DebugItem, { type: K }>["data"]
  >;
}[DebugItem["type"]];

type UseDebugReturn<T> = {
  [K in keyof T]: T[K] extends { type: infer U }
    ? U extends keyof DebugValueMap
      ? DebugValueMap[U]
      : never
    : never;
};

// const data = useDebug({ exampleProp: { type: "input", value: 4 } })
export function useDebug<T extends Record<string, UseDebugItem>>(
  items: T & {
    [K in keyof T]: { type: T[K] extends { type: infer U } ? U : never };
  },
): UseDebugReturn<T> {
  console.log("creating debug...");
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
      {} as UseDebugReturn<T>,
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
