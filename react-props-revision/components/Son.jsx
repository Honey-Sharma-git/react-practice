import { GrandChild } from "../components/GrandChild";
const Son = (props) => {
  const { sonMessage } = props;
  return <GrandChild grandChildMessage={sonMessage} />;
};
export { Son };
