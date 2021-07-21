import React from 'react';
import { nanoid } from 'nanoid';

function App() {

    return (
<>
    <p>hello! I am <i><b>Nanoid</b></i>, I can generate random ID</p>
    <p>{nanoid()}</p>
    <p>{nanoid(8)}</p>
    <p>{nanoid(32)}</p>
    <p>{nanoid(128)}</p>
    <p>{nanoid(1024)}</p>
</>
    )
}

export default App;
