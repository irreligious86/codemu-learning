import React from 'react';

function App() {

    return <ul>
        {arr.map((i, index) => (
            <li key={index}>
                {i}
            </li>
        ))}
    </ul>;
}

export default App;