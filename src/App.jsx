import { useState } from 'react'
import './App.css'
import { Dictionary } from './pages/Dictionary';
import { Jokes } from './pages/Jokes';
import { Riddles } from './pages/Riddles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Riddles />
        <Jokes />
      </div>
    </div>
  );
}

export default App
