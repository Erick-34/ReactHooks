import React, { useState, useEffect } from "react";

const Home = () => {
  const [state, setState] = useState([]);

  const handleName = () => {
    return setState(...state, ["Erick", 19, "Web development"]);
  };

  useEffect(() => {
    console.log("Fução executada com sucesso");
  }, [state]);

  return (
    <div>
      <h1>Name: {state[0]}</h1>
      <h2>Idade: {state[1]}</h2>
      <h3>Job: {state[2]}</h3>
      <button type="button" onClick={handleName}>
        HandleName
      </button>
    </div>
  );
};

export default Home;
