import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
function App() {
  const [show, setShow] = useState(false);
  const handleClick =() => {setShow(!show)}
  return (
    <div className="App">
      <h1>Workshop hooks</h1>
      <button onClick={handleClick}>Toggle</button>
      {show && <Counter/>}
    </div>
  );
}
export default App;