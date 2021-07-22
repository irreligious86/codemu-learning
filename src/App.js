import React, { useState } from 'react';
import './App.css';

function App() {

    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

    function clickHandler () {
        return setNotes( () => [...notes, (notes.length+1).toString()])
    }

    const resultArr = notes.map((item, index) => {
        return <b key={index}> {item} </b>;
    });

    return (
        <>
        <button onClick={clickHandler}>Add item</button> <br/>
        <p>{resultArr}</p>
        </>
    )
}

export default App;
