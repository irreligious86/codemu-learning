import React from 'react';
import './App.css';

function App() {
  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;

  return <ul>
    {li1} <br/>
    {li2} <br/>
    {li3} <br/>
  </ul>
}

export default App;
