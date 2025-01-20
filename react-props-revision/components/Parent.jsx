import { Son } from "../components/Son.jsx";
const Parent = (props) => {
    const {parentMessage} = props;
  return <Son sonMessage = {parentMessage}/>;
};
export { Parent };
