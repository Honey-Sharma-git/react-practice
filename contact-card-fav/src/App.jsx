// Imports:
import data from "./scripts/data";
import Contact from "../components/Contact";

export default function App() {
  //Mapping data from imported file
  const contact = data.map((element) => {
    return (
      <Contact
        key={element.id}
        firstName={element.firstName}
        lastName={element.lastName}
        mobile={element.mobile}
        email={element.email}
        about={element.about}
        src={element.image.src}
        alt={element.image.alt}
      />
    );
  });
  return contact;
}
