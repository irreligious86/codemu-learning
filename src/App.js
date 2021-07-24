import React, { useState } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState([' a ', ' b ', ' c ', ' d ', ' e ']);
    const [editNum, setEditNum] = useState(null);

    const result = notes.map((note, index) => {
        return <li key={index}>
            {note}
            <button onClick={() => setEditNum(index)}>Edit</button>
        </li>;
    });

    function changeItem(event) {
        setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
    }

    function clearInput () {
        setEditNum('');
    }

    return <ul>
        {result}
        <input
            value={editNum ? notes[editNum] : ''}
            onChange={changeItem}
            onBlur={clearInput}
        />
    </ul>;
}

export default App;
