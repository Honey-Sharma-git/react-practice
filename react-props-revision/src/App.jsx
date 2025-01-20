import { EventListeners } from "../components/EventListeners.jsx";
import { DisplayItems } from "../components/DisplayItems.jsx";
import { BgColor } from "../components/BgColor.jsx";
import { Form } from "../components/Form.jsx";
import { ToggleButton } from "../components/ToggleButton.jsx";
import { Todo } from "../components/Todo.jsx";
import { Parent } from "../components/Parent.jsx";
import { ProfilePic } from "../components/ProfilePic.jsx";
import { StyledButton } from "../components/StyledButton.jsx";
import { ProductList } from "../components/ProductList.jsx";
import React from "react";
import { Counter } from "../components/Counter.jsx";
import { StatusMessage } from "../components/StatusMessage.jsx";
import { JSExpression } from "../components/JSExpression.jsx";
import { Button } from "../components/Button.jsx";
import { UserCard } from "../components/UserCard.jsx";
import { Greetings } from "../components/Greetings.jsx";
export const App = () => {
  //Function for increment and decrements:
  const [value, setValue] = React.useState(0);
  const increment = () => {
    return setValue((prev) => {
      return prev + 1;
    });
  };
  const decrement = () => {
    return setValue((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  const profiles = [
    {
      url: "https://placehold.co/150x150?text=John",
      alt: "Profile picture of John",
    },
    {
      url: "https://placehold.co/150x150/blue/white?text=Sarah",
      alt: "Profile picture of Sarah",
    },
    {
      url: "https://placehold.co/150x150/red/white?text=Alex",
      alt: "Profile picture of Alex",
    },
  ];
  const profile = profiles.map((pic, index) => {
    return <ProfilePic key={index} url={pic.url} alt={pic.alt} />;
  });
  return (
    <main>
      {/* {profile}
      <Greetings name="Honey Sharma" />
      <UserCard name="Honey Sharma" age={27} city="Jaipur" />
      <Button text="Press" />
      <JSExpression a={1 + 2} b={5} />
      <StatusMessage message="Success" />
      <Counter increment={increment} value={value} decrement={decrement} />
      <ProductList
        products={[
          { id: 1, name: "T-Shirt", price: 1299 },
          { id: 2, name: "Trousers", price: 199 },
          { id: 3, name: "Shoes", price: 299 },
        ]}
      />
      <StyledButton color="green" textDecoration="underline" /> */}
      {/* <Parent parentMessage="Question solved" /> 
      <Todo list={["Take siesta", "Kill mosquitoes", "Scroll reels"]} />
      <ToggleButton />
      <Form />
      <BgColor/>*/}
      {/* <DisplayItems /> */}
      <EventListeners />
    </main>
  );
};
