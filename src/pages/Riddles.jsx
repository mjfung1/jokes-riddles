import { useState } from "react";


export const Riddles = () => {

    const [riddle, setRidlle] = useState({ riddle: "", answer: "" });

    const getRiddle = async () => {

        const res = await fetch("https://riddles-api.vercel.app/random");
        const data = await res.json();
        
        setRidlle(data);
    };
 
    return (
      <div className="slides slide1">

        <h1>Riddles</h1>

        <div>
          <h2>{riddle.riddle}</h2>
          <h3>{riddle.answer}</h3>

        </div>
        <div className="btn-container">
          <button onClick={getRiddle}>Get Riddle</button>
        </div>
  
      </div>
    );
};