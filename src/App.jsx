import React, { useState } from 'react';
import './App.css';
import ParentComponent from './parentComponent';


function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Sample React Application</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <ParentComponent count={count}/>
    </div>
  );
}

export default App;

