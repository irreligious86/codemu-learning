import React, { useState } from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(0);

    return (
        <>
            <input value={value} onChange={event => {setValue(event.target.value)}} />
            <p><i><b>Birth year:</b></i> {(new Date()).getFullYear() - value}</p>
        </>
    )
}

export default App;
