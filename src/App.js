import React, {useState} from 'react';
import './App.css';

function App() {

    const [htmlChecked, setHtmlChecked] = useState(false);
    const [cssChecked, setCssChecked] = useState(false);
    const [jsChecked, setJsChecked] = useState(false);

    return (
        <>
            <input type="checkbox" checked={htmlChecked} onChange={() => setHtmlChecked(!htmlChecked)}/> <b>HTML</b> <br/>
            <input type="checkbox" checked={cssChecked} onChange={() => setCssChecked(!cssChecked)}/> <b>CSS</b> <br/>
            <input type="checkbox" checked={jsChecked} onChange={() => setJsChecked(!jsChecked)}/> <b>Javascript</b> <br/>
            <p>
                <b>HTML </b> { htmlChecked ? '+' : '-' }
            </p>
            <p>
                <b>CSS </b> { cssChecked ? '+' : '-' }
            </p>
            <p>
                <b>Javascript </b> { jsChecked ? '+' : '-' }
            </p>
        </>
    )
}

export default App;
