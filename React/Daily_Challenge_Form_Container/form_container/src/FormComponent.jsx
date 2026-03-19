import React from "react";

class FormComponent extends React.Component {
  render() {
    const { data, handleChange } = this.props;

    return (
      <div>
        <form>
          <h1>Sample form</h1>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={data.age}
            onChange={handleChange}
          />
          <br />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          <br />
          <br />

          <label>
            <strong>Select your destination</strong>
          </label>
          <br />
          <select
            name="destination"
            value={data.destination}
            onChange={handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>

          <br />
          <br />

          <strong>Dietary restrictions:</strong>
          <br />

          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={data.nutsFree}
              onChange={handleChange}
            />
            Nuts free
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={data.lactoseFree}
              onChange={handleChange}
            />
            Lactose free
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={data.vegan}
              onChange={handleChange}
            />
            Vegan
          </label>

          <br />
          <br />
          <button type="submit">Submit</button>
        </form>

        <hr />

        <h2>Entered information:</h2>
        <p>Your name: {data.firstName} {data.lastName}</p>
        <p>Your age: {data.age}</p>
        <p>Your gender: {data.gender}</p>
        <p>Your destination: {data.destination}</p>

        <p>Your dietary restrictions:</p>
        <p>**Nuts free : {data.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {data.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {data.vegan ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default FormComponent;