import React from "react";
import FormComponent from "./FormComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    return <FormComponent data={this.state} handleChange={this.handleChange} />;
  }
}

export default App;
