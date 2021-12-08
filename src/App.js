import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ repeat, setRepeat] = useState('')
  const copy = (e) => {
    setRepeat(e.target.value)
  }
  return (
    <div>
      <h1>Un repetidor</h1>
      <input onChange={copy} type="text" placeholder="Empieza a escribir algo" />
      <p className="repeater">{repeat}</p>
    </div>
  );
}

export default App;
