

import { useState } from "react";

export const Dictionary = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const getRiddle = async () => {
    const res = await fetch("https://riddles-api.vercel.app/random");
    const data = await res.json();

    setRidlle(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await resp.json();

    const definition = data[0].meanings[0].definitions[0].definition;

    setMeaning(definition);
  }

  return (
    <div className="slides slide2">
      <h1>English Dictionary</h1>
      <h2> Word title: { word } </h2>
      <h2> Meaning: { meaning } </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <button type="submit">Find Meaning</button>
      </form>
    </div>
  );
};