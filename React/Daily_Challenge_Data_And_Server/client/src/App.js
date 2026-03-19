import React, { Component } from "react";

class App extends Component {
  state = {
    message: "",
    post: "",
    responseToPost: ""
  };

  async componentDidMount() {
    try {
      const response = await fetch("/api/hello");
      const body = await response.text();

      if (response.status !== 200) {
        throw Error(body);
      }

      this.setState({ message: body });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = (event) => {
    this.setState({ post: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/world", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ post: this.state.post })
      });

      const body = await response.text();

      this.setState({ responseToPost: body, post: "" });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>{this.state.message}</h1>

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;