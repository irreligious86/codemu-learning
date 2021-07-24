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

    const resultDate = `${(initDate.year).toString()}-${(initDate.month).toString()}-${(initDate.day).toString()}`;

    const resultDay = daysOfWeek[new Date(resultDate).getDay()];

    return (
       <p>
           {resultDate}
           <br/>
           {resultDay}
       </p>
    )
}

export default App;
