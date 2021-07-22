import React, { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');

    return <div>
        <select value={value} onChange={event => setValue(event.target.value)}>
            <option value="1">0-12</option>
            <option value="2">13-17</option>
            <option value="3">18-25</option>
            <option value="4">26+</option>
        </select>
        <p>
            {value === '1' && 'Your age group is: 0-12'}
            {value === '2' && 'Your age group is: 13-17'}
            {value === '3' && 'Your age group is: 18-25'}
            {value === '4' && 'Your age group is: 26+'}
        </p>
    </div>;
}

export default App;
