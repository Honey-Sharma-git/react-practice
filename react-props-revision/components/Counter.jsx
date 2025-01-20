const Counter = (props) => {
  const { increment, decrement, value } = props;
  return (
    <div>
      <p>{value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export { Counter };
