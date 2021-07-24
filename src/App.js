import React, { useState } from 'react';
import './App.css';

const initDate = {
    year:  2025,
    month: 12,
    day:   31,
}

const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
}

function App() {

    const [value1, setValue1] = useState(initDate.year);
    const [value2, setValue2] = useState(initDate.month);
    const [value3, setValue3] = useState(initDate.day);
    const [resultDate, setResultDate] = useState(`${(initDate.year).toString()}-${(initDate.month).toString()}-${(initDate.day).toString()}`)

    function changeHandler1 (event) {
        setValue1(event.target.value);
    }
    function changeHandler2 (event) {
        setValue2(event.target.value);
    }
    function changeHandler3 (event) {
        setValue3(event.target.value);
    }
    function blurHandler () {
        setResultDate(`${(value1).toString()}-${value2.toString()}-${value3.toString()}`)
    }

    const resultDay = daysOfWeek[new Date(resultDate).getDay()];

    return (
        <>
            <p>
                <input value={value1} onChange={changeHandler1} onBlur={blurHandler}/> <i><b>Year</b></i> <br/>
                <input value={value2} onChange={changeHandler2} onBlur={blurHandler}/> <i><b>Month</b></i> <br/>
                <input value={value3} onChange={changeHandler3} onBlur={blurHandler}/> <i><b>Day</b></i> <br/>
                {resultDate}
                <br/>
                {resultDay}
            </p>
        </>
    )
}

export default App;
