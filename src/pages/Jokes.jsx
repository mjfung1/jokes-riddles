


import { useState } from "react";

export const Jokes = () => {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await res.json();
    
    if (data.joke.length > 320) getJoke();

    setJoke(data.joke);
  };

  return (
    <div className="slides slide2">
      <h1>Jokes</h1>
      <h2>{joke}</h2>
    
      <div className="btn-container">
        <button onClick={getJoke}>Tell me a joke</button>

      </div>
    </div>
  );
};