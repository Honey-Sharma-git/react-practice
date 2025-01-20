const StyledButton = (props) => {
  const { color, textDecoration } = props;
  return (
    <button style={{ color: color, textDecoration: textDecoration }}>
      Styled Button
    </button>
  );
};
export { StyledButton };
