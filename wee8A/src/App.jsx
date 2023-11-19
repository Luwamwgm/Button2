import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount ( count => count +1);
  };

  const decrease = () => {
    if (count>0){ 
      setCount( count => count -1);
    };
  }
  return (
    <>
     
      <h1>counter</h1>
      <div className="counter">
        <span className="counter_output">{count}</span>
        <div className="btn_container">
        <button className="btn" onClick={increase}>+</button>
          <button className="btn" onClick={decrease}>-</button>
         
        </div>
        </div>
    </>
  );
}

export default App
