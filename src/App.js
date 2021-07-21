import React from 'react';

function App() {

    function getDigitsSum(num) {
        return (String(num).split('')).reduce((sum, current) => {
            return sum + +current;
        }, 0)
    }

    return (
        <span>
            {getDigitsSum(123)}
        </span>
    )
}

export default App;
