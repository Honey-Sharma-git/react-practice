export const UserCard = (props) => {
  const { name, age, city } = props;
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>City: {city}</li>
    </ul>
  );
};
