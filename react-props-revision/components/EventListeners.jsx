import { useState } from "react";
const EventListeners = () => {
  const [text, setText] = useState("This is the paragraph");
  const changeText = () => {
    return setText((prev) => {
      return (prev = "The paragraph is changed!");
    });
  };
  const [paraClass, setParaClass] = useState("para-white-bg");

  const changeColor = () => {
    return setParaClass((prev) => {
      return (prev = "para-green-bg");
    });
  };
  const [hoverState, setHoverState] = useState("Not Hovered");
  function onMouseEnter() {
    setHoverState((prev) => {
      return (prev = "Hovered!");
    });
  }
  function onMouseLeave() {
    setHoverState((prev) => {
      return (prev = "Not Hovered");
    });
  }
  function changeBorderColor() {
    const inputElement = document.getElementById("input");
    inputElement.style.setProperty("outline-color", "red");
  }
  function revertBorderColor() {
    const inputElement = document.getElementById("input");
    inputElement.style.setProperty("outline-color", "black");
  }
  return (
    <main>
      <button
        onClick={() => {
          window.alert("Button Clicked");
        }}
      >
        Click me
      </button>
      <p className={paraClass}>{text}</p>
      <button onClick={changeText}>Change Text</button>
      <button onClick={changeColor}>Change color</button>
      <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {hoverState}
      </button>
      <input
        type="text"
        onFocus={changeBorderColor}
        onBlur={revertBorderColor}
        id="input"
      />
    </main>
  );
};
export { EventListeners };
