import React, {useState} from 'react';
import './App.css';

function App() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);

    function handleChange1(event) {
        setValue1(event.target.value);
        console.log(new Date(value1).getTime())
    };

    function handleChange2(event) {
        setValue2(event.target.value);
        console.log(new Date(value2).getTime())
    };

    const timestamp1 = new Date(value1).getTime();
    const timestamp2 = new Date(value2).getTime();

    return (
        <>
            <input value={value1} onChange={handleChange1}/> <br/>
            <input value={value2} onChange={handleChange2}/> <br/>
            <button onClick={() => { setResult((timestamp1 - timestamp2)/(1000*3600*24))
            }
            }>Get difference
            </button>
            <br/>
            <p><i><b>Result: </b></i>{result}</p>
        </>
    )
}

export default App;
