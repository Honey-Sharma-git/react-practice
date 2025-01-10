export default function App() {
  function handleSubmit(event) {
    //Form settings
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formElement.reset();

    //Extracting data:
    const firstName = formData.get("firstName");
    const secondName = formData.get("secondName");
    const email = formData.get("email");
    const password = formData.get("password");
    const skills = formData.getAll("skills");
    const workmode = formData.getAll("workmode");
    const salaryexp = formData.getAll("salaryexp");
    const favcolor = formData.getAll("favcolor");
    console.log(
      firstName,
      secondName,
      email,
      password,
      skills,
      workmode,
      salaryexp,
      favcolor
    );
  }
  return (
    <main className="main">
      <form className="main__form" method="post" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Honey"
          defaultValue={"Ram"}
        />
        <label htmlFor="secondName">Second name:</label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          placeholder="Sharma"
          defaultValue={"Sharma"}
        />
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="myemail@gmail.com"
          defaultValue={"myemail@example.com"}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue={"mySecretPassword123"}
        />
        <fieldset>
          <legend>Skills:</legend>
          <label htmlFor="html">
            <input
              type="checkbox"
              defaultChecked={true}
              name="skills"
              id="html"
              value="html"
            />
            HTML
          </label>
          <label htmlFor="css">
            <input
              type="checkbox"
              defaultChecked={true}
              name="skills"
              id="css"
              value="css"
            />
            CSS
          </label>
          <label htmlFor="javascript">
            <input
              type="checkbox"
              name="skills"
              id="javascript"
              defaultChecked={true}
              value="javascript"
            />
            JavaScript
          </label>
          <label htmlFor="react">
            <input type="checkbox" name="skills" id="react" value="react" />
            React
          </label>
          <label htmlFor="tailwindcss">
            <input
              type="checkbox"
              name="skills"
              id="tailwindcss"
              value="tailwindcss"
            />
            Tailwind CSS
          </label>
          <label htmlFor="nodejs">
            <input type="checkbox" name="skills" id="nodejs" value="nodejs" />
            Nodejs
          </label>
          <label htmlFor="angular">
            <input type="checkbox" name="skills" id="angular" value="angular" />
            Angular
          </label>
        </fieldset>
        <fieldset>
          <legend>Work mode:</legend>
          <label htmlFor="wfh">
            <input type="radio" name="workmode" value={"WFH"} id="wfh" />
            WFH
          </label>
          <label htmlFor="wfo">
            <input type="radio" name="workmode" value={"WFO"} id="wfo" />
            WFO
          </label>
          <label htmlFor="hybrid">
            <input
              type="radio"
              name="workmode"
              value={"Hybrid"}
              id="hybrid"
              defaultChecked={true}
            />
            Hybrid
          </label>
        </fieldset>
        <label htmlFor="salaryexp"> Salary expectation:</label>
        <input
          type="range"
          name="salaryexp"
          id="salaryexp"
          min={400000}
          max={1600000}
          defaultValue={800000}
        />
        <label htmlFor="favcolor">Choose T-shirt color:</label>
        <select name="favcolor" id="favcolor">
          <option value="Not selected">Select color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </main>
  );
}
