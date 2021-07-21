import React from 'react';

function App() {

    const users = [
        {id:1, name: 'user1', surn: 'surn1', age: 30},
        {id:2, name: 'user2', surn: 'surn2', age: 31},
        {id:3, name: 'user3', surn: 'surn3', age: 32},
    ];

    const list = users.map( (item) => {
        return <li key={item.id}>
            <span>{item.id + ' '}</span>
            <span>{item.name + ' '}</span>
            <span>{item.surn + ' '}</span>
            <span>{item.age + ' '}</span>
        </li>
    })

    return <ul>
        {list}
    </ul>


    }

export default App;
