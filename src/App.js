import React, {useState} from 'react';
import './App.css';

const id = 'GYi9G_uC4gBF1e2SixDvu';

const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13'
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23'
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33'
    }
];

function App() {

const [notes, setNotes] = useState(initNotes);
const [value, setValue] = useState('');
const [goal, setGoal] = useState(null);

function changeHandler (event) {
    setValue(event.target.value);
    console.log(event.target.value);
}

function clickHandler (event) {
    setNotes(delItem(event.target.value));
    console.log(notes)
}

const delItem = id => {

    const z = notes.filter(note => note.id === id);

    return setNotes([...notes.slice(0, z), ...notes.slice(z + 1)]);
}

const result = notes.map( (item, index) => {
    return <p key={index}>{item.id}</p>
})


    return (
        <>
            <input
                onChange={changeHandler}/>
            <button
                onClick={clickHandler}>
                Del</button> <br/>
            <div>{result}</div>
        </>
    )
}

export default App;
