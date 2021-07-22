import React, {useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    function changeHandler (event) {
        setValue(event.target.value);
    };

    function sum (num) {
        return (num.split('')).reduce( (accu, current) => +accu + +current )
    };


    return (
        <>
            <input
                onChange={changeHandler}
                onBlur={() => {
                    value && setResult(sum(value));
                }}
            />
            <p><i><b>Result: </b></i>{result}</p>
        </>
    )
};

export default App;
