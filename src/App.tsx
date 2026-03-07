import DebugPanel from "./components/DebugPanel/DebugPanel";
import { useDebug } from "./hooks/useDebug";

function App() {
  const { input, range, checkbox, select } = useDebug({
    // String input
    input: {
      type: "input",
      value: "test",
    },
    // Range input
    range: {
      type: "range",
      min: 0,
      max: 100,
      step: 0.1,
      value: 4.2,
    },
    // Checkbox input
    checkbox: {
      type: "checkbox",
      value: true,
    },
    // Button input
    button: {
      type: "button",
      text: "Debug alert",
      value: () => alert("what's up"),
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
    // Vector3D input
    vector3d: {
      type: "vec3",
      value: {
        x: 0,
        y: 1,
        z: 2,
      },
    },
    // Vector4D input
    vector4d: {
      type: "vec4",
      value: {
        x: 0,
        y: 1,
        z: 2,
        w: 3,
      },
    },

    // Piano

    piano: {
      type: "piano",
    },
  });

  console.log("data", input);
  return (
    <div>
      <DebugPanel />
      <p>Input: {input}</p>
      <p>Range: {range}</p>
      <p>Select: {select}</p>
      <p>Checkbox: {checkbox ? "True" : "False"}</p>
    </div>
  );
}

export default App;
