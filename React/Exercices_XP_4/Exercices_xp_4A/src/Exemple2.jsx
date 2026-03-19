import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {data.Skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.Area}</h3>
            <ul>
              {skill.SkillSet.map((item, i) => (
                <li key={i}>{item.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;