import React, { useState } from 'react';

function App() {

    const [name, setName] = useState('John');
    const [surname, setSurname] = useState('Connor');
    const [age, setAge] = useState('16');


    return (
        <>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p>

        </>
    )
}

export default App;
