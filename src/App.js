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
            <p><button onClick={()=>{setAge(age-1)}}>-</button>
                {age}
                <button onClick={()=>{setAge(age+1)}}>+</button>
            </p>
            <p>{ allowed ? 'Allowed' : 'Forbidden' }

                { allowed ? <button onClick={ () => {setAllowed(false)}}>Forbidden</button> : <button onClick={ () => {setAllowed(true)}}>Allow</button> }

            </p>
        </>
    )
}

export default App;
