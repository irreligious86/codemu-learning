import React, {useState} from 'react';
import './App.css';

function App() {

    const [checked, setChecked] = useState(true);

    return (
        <>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> <br/>
            <button onClick={ () => setChecked(!checked) }>Click</button> <br/>
            <p>{checked ? 'Hello, User!' : 'Good bye!'}</p>
        </>
    )
}

export default App;
