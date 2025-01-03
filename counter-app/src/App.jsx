import React from "react";
export default function App() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  }
  function subtract() {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  }
  return (
    <main className="main">
      <p className="main__para">{count}</p>
      <div className="btn-container">
        <button className="btn" onClick={subtract}>
          -
        </button>
        <button className="btn" onClick={add}>
          +
        </button>
      </div>
    </main>
  );
}
