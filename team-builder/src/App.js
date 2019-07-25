import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [team, setTeam] = useState([]);

  const addMember = member => {
    setTeam([...team, member]);
  };

  return (
    <div className="App">
      <h2>These are our team members</h2>
      {team.map(member => (
        <div key={member.email}>
          <p>{member.name}</p>
        </div>
      ))}
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
