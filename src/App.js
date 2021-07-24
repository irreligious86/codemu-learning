import React, { useState } from 'react';
import './App.css';

function App() {

    const [obj, setObj] = useState({
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
    });

    function clickHandler1 (event) {
        setObj({...obj, ...{prop1: '!'}})
    }

    function clickHandler2 (event) {
        setObj({...obj, ...{prop2: '%'}})
    }

    function clickHandler3 (event) {
        setObj({...obj, ...{prop3: '@'}})
    }


    return <div>
        <span>{obj.prop1}</span> <button onClick={clickHandler1}>Edit</button> <br/>
        <span>{obj.prop2}</span> <button onClick={clickHandler2}>Edit</button> <br/>
        <span>{obj.prop3}</span> <button onClick={clickHandler3}>Edit</button> <br/>
    </div>;

}

export default App;
