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

    setInterval(UpdateTime, 1000);

    return (
        <div className = "centerdiv">
          <h1>{ctime}</h1>
          <button onClick={UpdateTime}>Get Time</button>
        </div>
    );
};

export default App;
