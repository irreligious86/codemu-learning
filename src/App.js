import React from 'react';

function App() {

    const arr = ['a', 'b', 'c', 'd', 'e'];

    const list = arr.map((item, i) => {
        return <li key={i}>{item}</li>
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default App;
