import React from 'react';
import './App.css';
import Tarea from './Tarea.jsx'

function App() {
  return (<>
    <div className="app__container">
      <h1>To-Do List</h1>
      <div className="main-lista__container">
        <Tarea/>
      </div>
    </div>
  </>);
}

export default App;
