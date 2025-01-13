export default function App() {
  function handleSubmit(event) {
    // event.preventDefault();
    const currentElement = event.currentTarget;
    const formData = new FormData(currentElement);
    const data = Object.fromEntries(formData);
    const skills = formData.getAll("skills");
    data.skills = skills;
    console.log(data);
    currentElement.reset();
  }
  function handleReset(event) {
    event.currentTarget.reset();
  }

  return (
    <form
      method="post"
      target="_blank"
      onSubmit={handleSubmit}
      action="https://httpbin.org/post"
      autoComplete="off"
    >
      <label htmlFor="searchQuery">Search:</label>
      <input
        type="search"
        name="searchQuery"
        id="searchQuery"
        placeholder="name, phone"
      />
      <label htmlFor="firstName">First name: </label>
      <input
        name="firstName"
        id="firstName"
        type="text"
        placeholder="Honey"
        autoFocus
        defaultValue={"Honey"}
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Sharma"
        defaultValue={"Sharma"}
      />
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" name="dob" id="dob" defaultValue={"2025-01-14"} />
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        name="email"
        id="email"
        defaultValue={"honey@example.com"}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        defaultValue={"Honey123"}
      />
      <label htmlFor="favColor">Favorite color:</label>
      <input type="color" name="favColor" id="favColor" />
      <label htmlFor="state">State:</label>
      <select name="state" id="state" defaultValue={"Rajasthan"}>
        <option>Select state</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Delhi">Delhi</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
      </select>
      <fieldset>
        <legend>Skills:</legend>
        <label htmlFor="skills">
          <input
            type="checkbox"
            name="skills"
            id="javascript"
            value="javascript"
            defaultChecked={true}
          />
          javascript
        </label>
        <label htmlFor="skills">
          <input
            type="checkbox"
            name="skills"
            id="css"
            value="css"
            defaultChecked={true}
          />
          css
        </label>
      </fieldset>
      <fieldset>
        <legend>Gender:</legend>
        <label htmlFor="gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value={"male"}
            defaultChecked={true}
          />
          Male
        </label>
        <br />
        <label htmlFor="gender">
          <input type="radio" id="female" name="gender" value={"female"} />
          Female
        </label>
        <br />
        <label htmlFor="gender">
          <input type="radio" id="other" name="gender" value={"other"} />
          Other
        </label>
        <br />
      </fieldset>
      <label htmlFor="mobile">Contact number:</label>
      <input
        type="tel"
        name="mobile"
        id="mobile"
        placeholder="+91-8955687845"
        defaultValue={"+91-8955687845"}
      />
      <label htmlFor="age">Age:</label>
      <input type="number" name="age" id="age" defaultValue={25} />
      <label htmlFor="experience">Work experience</label>
      <input type="range" name="experience" id="experience" defaultValue={70} />
      <label htmlFor="linkedinUrl">Enter your linkedIn profile URL:</label>
      <input
        type="url"
        name="linkedinUrl"
        id="linkedinUrl"
        defaultValue={"https://www.linkedin.com"}
      />
      <label htmlFor="resume">Upload your resume:</label>
      <input type="file" name="resume" id="resume" />
      <label htmlFor="month">Submission month:</label>
      <input type="month" name="month" id="month" defaultValue={"2025-07"} />
      <label htmlFor="week">Expected week of joining:</label>
      <input type="week" name="week" id="week" />

      <input
        type="button"
        value="clickable button"
        onClick={() => {
          alert("Button clicked");
        }}
      />
      <button type="submit">Submit</button>
      <input type="reset" value="reset" onClick={handleReset} />
    </form>
  );
}
