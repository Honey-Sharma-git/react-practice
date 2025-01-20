import { useState } from "react";
const BgColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const green = () => {
    return setBgColor((prev) => {
      return (prev = "green");
    });
  };
  const white = () => {
    return setBgColor((prev) => {
      return (prev = "white");
    });
  };
  const black = () => {
    return setBgColor((prev) => {
      return (prev = "black");
    });
  };

  const body = document.body.style.setProperty("background-color", bgColor);
  return (
    <>
      <button onClick={green}>Green</button>
      <button onClick={white}>White</button>
      <button onClick={black}>Black</button>
    </>
  );
};
export { BgColor };
