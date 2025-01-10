import qaData from "./qaData";
import { createRoot } from "react-dom/client";
import App from "./App";
const questionAnswers = qaData.map((item) => {
  return <App question={item.question} answer={item.answer} number={item.id} fName = {item.name.firstName} />;
});
const root = createRoot(document.getElementById("root"));
root.render(questionAnswers);
