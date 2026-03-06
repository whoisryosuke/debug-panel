import DebugPanel from "./components/DebugPanel/DebugPanel";
import { useDebug } from "./hooks/useDebug";

function App() {
  const { input, range, select } = useDebug({
    // String input
    input: {
      type: "input",
      value: "test",
    },
    range: {
      type: "range",
      min: 0,
      max: 100,
      step: 0.1,
      value: 4.2,
    },
    // Select input
    select: {
      type: "select",
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
    },
  });

  console.log("data", input);
  return (
    <div>
      <DebugPanel />
      <p>Input: {input}</p>
      <p>Range: {range}</p>
      <p>Select: {select}</p>
    </div>
  );
}

export default App;
