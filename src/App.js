import React from 'react';
import {useState} from 'react';
import './App.css';


const App = () => {
    const state = useState();

    const [count, setCount] = useState(0);

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const IncNum = () => {
        setCount(count +1);
    };

    const UpdateTime = () => {
      newTime = new Date().toLocaleTimeString();
      setCtime(newTime);
    }

    const [bg, setBg] = useState('color');
    const [nameClick, setNameClick] = useState('Click me');

    const bgChange = () => {
      // console.log("clicked");
      const color = '#FFDDCC';
      let pink = '#9ED2BE';
      setBg(pink);
      setNameClick('Ouch!!!');
    };

    const bgBack = () => {
      setBg('#F11A7B');
      setNameClick('Hello Nilesh')
    };

    setInterval(UpdateTime, 1000);

    return (
        <div className = "centerdiv" style= {{backgroundColor: bg}}>
          <h1>{ctime}</h1>
          <button onClick={bgChange} onDoubleClick={bgBack}>{nameClick}</button>
        </div>
    );
};

export default App;
