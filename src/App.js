import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

    return (
<>
    <p>hello! I am <i><b>React UUID</b></i>, I can generate random ID</p>
    <p>{uuidv4()}</p>
    <p>{uuidv4(32)}</p>
    <p>{uuidv4(128)}</p>
    <p>{uuidv4(1024)}</p>

</>
    )
}

export default App;
