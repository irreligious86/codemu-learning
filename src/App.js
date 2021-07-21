import React, { useState } from 'react';
import './App.css';

function App() {
    const [value1, setValue1] = useState('text1');
    const [value2, setValue2] = useState('text2');

    return <div>
        <input value={value1} onChange={event => {setValue1(event.target.value)}}/>
        <input value={value2} onChange={event => {setValue2(event.target.value)}}/>

        <p>text1: {value1}</p>
        <p>text2: {value2}</p>
    </div>;
}

export default App;
