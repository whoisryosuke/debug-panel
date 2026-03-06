import React from "react";
import {
  DebugButton,
  DebugCheckbox,
  DebugItem,
  DebugRange,
  DebugSelect,
  DebugVector3D,
  DebugVector4D,
} from "@/store/DebugStore";
import DebugSelectInput from "./select/DebugSelectInput";
import DebugRangeInput from "./range/DebugRangeInput";
import DebugStringInput from "./input/DebugStringInput";
import DebugCheckboxInput from "./checkbox/DebugCheckboxInput";
import DebugButtonInput from "./button/DebugButtonInput";
import DebugVectorInput from "./vector/DebugVectorInput";

type Props = DebugItem;

const DebugInputComponent = ({ type, ...props }: Props) => {
  switch (type) {
    case "input":
      return (
        <DebugStringInput
          type={type}
          {...(props as Omit<DebugSelect, "type">)}
        />
      );

    case "select":
      return (
        <DebugSelectInput
          type={type}
          {...(props as Omit<DebugSelect, "type">)}
        />
      );
    case "range":
      return (
        <DebugRangeInput type={type} {...(props as Omit<DebugRange, "type">)} />
      );

    case "checkbox":
      return (
        <DebugCheckboxInput
          type={type}
          {...(props as Omit<DebugCheckbox, "type">)}
        />
      );

    case "button":
      return (
        <DebugButtonInput
          type={type}
          {...(props as Omit<DebugButton, "type">)}
        />
      );

    case "vec3":
      return (
        <DebugVectorInput
          type={type}
          {...(props as Omit<DebugVector3D, "type">)}
        />
      );
    case "vec4":
      return (
        <DebugVectorInput
          type={type}
          {...(props as Omit<DebugVector4D, "type">)}
        />
      );

    default:
      return <div></div>;
  }
};

export default DebugInputComponent;
