import {
  DebugButtonData,
  DebugCheckboxData,
  DebugItem,
  DebugPianoData,
  DebugRangeData,
  DebugVector3DData,
} from "./DebugStore";

export function generateDefaultData(
  type: DebugItem["type"],
  userData: Partial<DebugItem["data"]>,
) {
  switch (type) {
    case "piano":
      return {
        value: {
          c: false,
          d: false,
          e: false,
          f: false,
          g: false,
          a: false,
          b: false,
        },
        ...userData,
      } as DebugPianoData;
    case "button":
      return {
        text: "Forgot to name this",
        value: () => alert("I do nothing! Make sure to pass function as value"),
        ...userData,
      } as DebugButtonData;

    case "checkbox":
      return {
        value: false,
        ...userData,
      } as DebugCheckboxData;

    case "range":
      return {
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        ...userData,
      } as DebugRangeData;

    case "vec3":
      return {
        value: {
          x: 0,
          y: 0,
          z: 0,
        },
        ...userData,
      } as DebugVector3DData;

    case "vec4":
      return {
        value: {
          x: 0,
          y: 0,
          z: 0,
          w: 0,
        },
        ...userData,
      } as DebugVector3DData;

    case "select":
      return {
        value: "test",
        items: [
          {
            title: "Value 1",
            value: "1",
          },
          {
            title: "Value 2",
            value: "2",
          },
        ],
        ...userData,
      };

    default:
      return {
        value: "",
        ...userData,
      };
  }
}
