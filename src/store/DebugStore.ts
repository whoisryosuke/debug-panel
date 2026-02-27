import { atom } from "jotai";

export type DebugItemBase = {
    id: string;
}

// Select
export type DebugSelectItem = {
    title: string;
    value: string;
}
export type DebugSelect = DebugItemBase & {
    type: 'select',
    data: {
        value: string;
        items: DebugSelectItem[]
    };
}

// Range
export type DebugRangeData = {
    min: number;
    max: number;
    value: number;
}
export type DebugRange = DebugItemBase & {
    type: 'range',
    data: DebugRangeData;
}

// Input (generic)
export type DebugInputData = {
    value: number | string;
}
export type DebugInput = DebugItemBase & {
    type: 'input',
    data: DebugInputData;
}

export type DebugItem = DebugSelect | DebugRange | DebugInput;

type DebugStore = {
    visible: boolean;
    items: DebugItem[];
}


export const debugStore = atom<DebugStore>({
    visible: false,
    items: [],
})