import logo from './logo.svg';
import './App.css';
import React, { useCallback } from 'react';
import { useState } from 'react';
function App() {

  
    const [input,setInput]=useState("");
    const[count,setCount]=useState(0);
    const incrementCount=useCallback(()=>(setCount(count+1),[count]));

    return (
    <div className="App">
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={incrementCount}>incrementCount</button>
      <h3> Input text: {input}</h3>
      <h3> Count: {count}</h3>
      <ChildComponent count={count} onClick={incrementCount}/>
      
    </div>
    );
}
var ChildComponent = React.memo(function({count,onClick}){
  console.log("ChildComponent rendered")
  return(
    <div>
      <h3>I am child</h3>
      <button onClick={onClick}>incrementCount</button>
      <h3>Count: {count}</h3>
    </div>
  );
});

export default App;
