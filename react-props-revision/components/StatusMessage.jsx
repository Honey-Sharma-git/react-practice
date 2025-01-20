export const StatusMessage = (props) => {
  const { message } = props;
  const styleForSuccess = { color: "green" };
  const styleForError = { color: "red" };
  return (
    <dl>
      <dt>Message:</dt>
      <dd style={message === "Success" ? styleForSuccess : styleForError}>
        {message}
      </dd>
    </dl>
  );
};
