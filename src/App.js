import React, { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return <div>
        <input value={value} onChange={handleChange} />
        <p>{String(value).length}</p>
    </div>;
}

export default App;
