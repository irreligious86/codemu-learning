import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';

let arrObj = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
    }
];

function App() {

    const [notes, setNotes] = useState(arrObj)


    const result = notes.map((item, index) => {
        return <p key={index}>{item.id} {item.prop1} {item.prop2} {item.prop3}</p>
    })



    const newElem =  {
            id: uuidv4()
    };

    const clickHandler = () => setNotes([...notes, newElem]);

    return (
        <>
            {result} <br/>
            <button onClick={clickHandler}>Add</button>
        </>
    )
}

export default App;
