
import React, { useState } from "react";
import "./App.css";

function Tarea() {

      const [input, setInput] = useState('');
      const [tareas, setTareas] = useState([]);

      const manejarCambioInput = (e) => { setInput(e.target.value); };
      const manejarAgregarTarea = () => { input.trim() && setTareas([...tareas, input]) || setInput('') };
      const manejarPresionTecla = (e) => { e.key === 'Enter' && manejarAgregarTarea(); };
      const manejarEliminarTarea = (tareaAgregada) => { setTareas((tareasAnteriores) => tareasAnteriores.filter((_, i) => i !== tareaAgregada)) }


      return (<>
            <div>
                  <input className="tarea-input"
                        type="text"
                        placeholder="Escribe Tarea"
                        onChange={manejarCambioInput}
                        value={input}
                        onKeyDown={manejarPresionTecla}
                  />
            </div>
            <div className="lista-container">
                  <ul> {tareas.length > 0 && tareas.map((tarea, tareaAgregada) => (
                        <li key={tareaAgregada}>
                              {tarea}
                              {<button onClick={() => manejarEliminarTarea(tareaAgregada)}>✖️</button>}
                        </li>
                  ))}
                  </ul>
            </div>

      </>)
}


export default Tarea;  