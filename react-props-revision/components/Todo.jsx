const Todo = (props) => {
  const { list } = props;
  const todoList = list.map((todo, index) => {
    return (
      <ul key={index}>
        <li >{todo}</li>
      </ul>
    );
  });
  return  todoList ;
};
export { Todo };
