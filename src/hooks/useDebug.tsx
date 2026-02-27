import { DebugItem, debugStore } from "@/store/DebugStore";
import {  useSetAtom } from "jotai/react";
import { selectAtom } from "jotai/utils";
import { useEffect, useMemo } from "react";

// const data = useDebug("input", { value: 4 })
export function useDebug(type: DebugItem['type'], defaultData: DebugItem['data']) {
    const id = useMemo(() => crypto.randomUUID(), [])
    const data = selectAtom(debugStore, (store) => store.items.find(item => item.id == id));
    const updateStore = useSetAtom(debugStore);

    useEffect(() => {
        updateStore((prev) => {
            const newItem = {
                data: defaultData,
                type,
                id,
            } as DebugItem;
            const newItems = [...prev.items, newItem];

            return ({
                ...prev,
                items: newItems,
            })
        })
    
      return () => {
        updateStore((prev) => ({
            ...prev,
            items: prev.items.filter(item => item.id != id)
        }))
      }
    }, [])

    return data;
    
}