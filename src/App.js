import React, {useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(1);
    const langs = ['HTML', 'CSS', 'JS'];

    function changeHandler(event) {
        setValue(event.target.value);
    }

    const list = langs.map((item, index) => {
        return (
            <>
            <input
                type="radio"
                name="radio"
                value={langs[index]}
                key={index}
                id={item.value}
                checked={value === item.toString() ? true : false}
                onChange={changeHandler}
            />
                <label htmlFor={item.value}>{langs[index]}</label> <br/>
            </>
        )
    });

    return (
        <>
            {list}
            <p><i><b>Your choice: </b></i> {value} {value === 'JS' &&  <i>Super!!!!</i>}</p>
        </>
    )
}

export default App;
