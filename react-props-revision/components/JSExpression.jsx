export const JSExpression = (props) => {
  const add = (a, b) => {
    return a + b;
  };
  const { a, b } = props;
  return (
    <strong>
      <br />
      {add(a, b)}
    </strong>
  );
};
