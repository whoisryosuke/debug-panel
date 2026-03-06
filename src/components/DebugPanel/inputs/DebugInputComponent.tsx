import React from "react";
import { DebugItem, DebugRange, DebugSelect } from "@/store/DebugStore";
import DebugSelectInput from "./DebugSelectInput";
import DebugRangeInput from "./DebugRangeInput";
import DebugStringInput from "./DebugStringInput";

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

    default:
      return <div></div>;
  }
};

export default DebugInputComponent;
