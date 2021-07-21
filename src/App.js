import React, { useState } from 'react';

function App() {

    const [name, setName] = useState('John');
    const [surname, setSurname] = useState('Connor');
    const [age, setAge] = useState('16');
    const [allowed, setAllowed] = useState(true);


    return (
        <>
            <p>{name} <button onClick={()=>{setName('George')}}>Set name</button> </p>
            <p>{surname} <button onClick={()=>{setSurname('Black')}}>Set surname</button> </p>
            <p>{age} <button onClick={()=>{setAge(48)}}>Set age</button> </p>
            <p>{ allowed ? 'Allowed' : 'Forbidden' } <button onClick={()=>{setAllowed(!allowed)}}>Allow</button> </p>
        </>
    )
}

export default App;
