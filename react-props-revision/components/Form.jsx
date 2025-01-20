import { useState } from "react";
const Form = () => {
  const [inputValue, setInputValue] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    setInputValue((prev) => {
      return (prev = data.formInput);
    });
  }
  return (
    <main>
      <p>{inputValue}</p>
      <form method="post" onInput={handleSubmit} onSubmit={handleSubmit}>
        <label htmlFor="formInput">Type to update the state:</label>
        <input
          type="text"
          name="formInput"
          id="formInput"
          placeholder="Type here"
        />
      </form>
    </main>
  );
};
export { Form };
