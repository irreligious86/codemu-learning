import React from 'react';

function App() {

    const arr = [1, 2, 3, 4, 5];


    return <ul>
        {arr.map((i, index) => (
            <li key={index}>
                {i}
            </li>
        ))}
    </ul>;
}

export default App;