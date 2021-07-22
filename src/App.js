import React, { useState } from 'react';
import './App.css';

function App() {

    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

    const ind = 1;

    function clickHandler () {
        return setNotes( [...notes.slice(0, ind), ...notes.slice(ind + 1)])
    }

    const resultArr = notes.map((item, index) => {
        return <b key={index}> {item} </b>;
    });

    return (
        <>
        <button onClick={clickHandler}>Delete item</button> <br/>
        <p>{resultArr}</p>
        </>
    )
}

export default App;
