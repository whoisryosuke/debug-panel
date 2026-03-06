import { atom } from "jotai";

export type DebugItemBase = {
  id: string;
};

// Select
export type DebugSelectItem = {
  title: string;
  value: string;
};
export type DebugSelect = DebugItemBase & {
  type: "select";
  data: {
    value: string;
    items: DebugSelectItem[];
  };
};

// Range
export type DebugRangeData = {
  min: number;
  max: number;
  step: number;
  value: number;
};
export type DebugRange = DebugItemBase & {
  type: "range";
  data: DebugRangeData;
};

// Checkbox
export type DebugCheckboxData = {
  value: boolean;
};
export type DebugCheckbox = DebugItemBase & {
  type: "checkbox";
  data: DebugCheckboxData;
};

// Button
export type DebugButtonData = {
  text: string;
  value: () => void;
};
export type DebugButton = DebugItemBase & {
  type: "button";
  data: DebugButtonData;
};

// Vector (3D)
export type Vector3D = {
  x: number;
  y: number;
  z: number;
};
export type DebugVector3DData = {
  value: Vector3D;
};
export type DebugVector3D = DebugItemBase & {
  type: "vec3";
  data: DebugVector3DData;
};

// Vector (4D)
export type Vector4D = Vector3D & {
  w: number;
};
export type DebugVector4DData = {
  value: Vector4D;
};
export type DebugVector4D = DebugItemBase & {
  type: "vec4";
  data: DebugVector4DData;
};

// Input (generic)
export type DebugInputData = {
  value: number | string;
};
export type DebugInput = DebugItemBase & {
  type: "input";
  data: DebugInputData;
};

export type DebugItem =
  | DebugSelect
  | DebugRange
  | DebugInput
  | DebugCheckbox
  | DebugButton
  | DebugVector3D
  | DebugVector4D;

type DebugStore = {
  visible: boolean;
  items: DebugItem[];
};

export const debugStore = atom<DebugStore>({
  visible: false,
  items: [],
});
