import { useDebug } from "../hooks/useDebug";

const TestInputComponent = () => {
  const { test } = useDebug({
    test: { type: "input", value: 4 },
  });
  return <div>{test}</div>;
};

export default TestInputComponent;
