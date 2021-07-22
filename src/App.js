import React, { useState } from 'react';
import './App.css';

function App() {
    const cities = ['London', 'Berlin', 'Chikago', 'Tokio'];
    const [value, setValue] = useState('');

    const options = cities.map((city, index) => {
        return <option key={index}>{city}</option>;
    });

    return <div>
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            {options}
        </select>
        <p>
            Your choice: {value}
        </p>
    </div>;
}

export default App;
