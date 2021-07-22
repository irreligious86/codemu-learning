import React, { useState } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState( ['a', 'b', 'c', 'd', 'e']);
    const [value, setValue] = useState('');

    const result = notes.map((note, index) => {
        return <li key={index}>{note}</li>;
    });

    function addItem() {
        setNotes([...notes, value]);
    }

    function changeInput(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <ul>{result}</ul> <br/>
            <input value={value} onChange={changeInput} onBlur={addItem}/>
        </>
    )
}

export default App;
