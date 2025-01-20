import { useState } from "react";
const DisplayItems = () => {
  const [item, setItem] = useState([]);
  let items = [];
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    setItem((prev) => {
      return (prev = [...prev, data.item]);
    });
    event.currentTarget.reset();
  }
  items = item.map((element, index) => {
    return <li key={index}>{element}</li>;
  });
  return (
    <main>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="itemField">Enter your item to be displayed:</label>
        <input type="text" id="itemField" name="item" />
        <button type="submit">Add</button>
      </form>
      <ul>{items}</ul>
    </main>
  );
};
export { DisplayItems };
