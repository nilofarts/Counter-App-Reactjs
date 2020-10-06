import React, { useState } from 'react';
import './App.css';

function App () {
  const [count, setCount] = useState(0)
  return (

    <div>
      <h1>Counter App Using State</h1>
      Default Value of Counter is {count}
      <div>
        <button className="button" onClick={() => setCount(0)}>Reset Counter</button>
        <button className="button" onClick={() => setCount(count + 1)}>Increment Counter</button>
        <button className="button" onClick={() => setCount(count - 1)}>Decrement Counter</button>
      </div>
    </div >
  );
}

export default App;
