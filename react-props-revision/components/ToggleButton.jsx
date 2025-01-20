import { useState } from "react";
const ToggleButton = () => {
  const [label, setLabel] = useState("ON");
  const toggleLabel = () => {
    return setLabel((prev) => {
      return prev === "ON" ? (prev = "OFF") : (prev = "ON");
    });
  };
  return <button onClick={toggleLabel}>{label}</button>;
};
export { ToggleButton };
