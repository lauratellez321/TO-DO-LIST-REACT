import { useState } from "react";
import "./App.css";
import { Formulario } from "./components/Formulario";
import { Tarea } from "./components/Tarea";

function App() {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (tarea === "") {
      alert("DEBES INGRESAR UNA TAREA");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false,
    };
    const temp = [nuevaTarea, ...listadoTareas];
    setListadoTareas(temp);

    setTarea("");

    console.log(listadoTareas);
  }

  function handleChange(e) {
    setTarea(e.target.value);
    console.log(tarea);
  }
  return (
    <>
      <div className="contenedorPrincipal">
        <h1>TO-DO LIST</h1>

        <div className="contenedorFormulario">
          <Formulario
            tarea={tarea}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className="contenedorTareas">
          <h2>Lista de Tareas</h2>
          <div className="contenedorInfoTareas">
            {listadoTareas.map((tarea) => (
              <Tarea key={tarea.id} id={tarea.id} tarea={tarea} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
