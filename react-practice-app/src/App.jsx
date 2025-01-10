export default function App(props) {
  console.log(props)
    return (
    <main>
      <p>{props.number}</p>
      <p>
        <strong>Question:</strong>
        {props.question}
      </p>
      <p>
        <strong>Answers:</strong>
        {props.answer}
      </p>
      <p>{props.fName}</p>
      <hr />
    </main>
  );
}
