import React, { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {

  render() {

    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>

        <h1 style={style_header}>This is a Header</h1>

        <p className="para">This is a Paragraph</p>

        <a href="https://react.dev">This is a Link</a>

        <h2>This is a Form:</h2>

        <form>
          <label>Enter your name:</label>
          <br />
          <input type="text" />
          <button type="submit">Submit</button>
        </form>

        <h2>Here is an Image:</h2>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react"
          width="300"
        />

        <h3>This is a List:</h3>

        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

      </div>
    );
  }
}

export default Exercise;