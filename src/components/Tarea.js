import { useState } from "react";

export function Tarea(props) {
  const { tarea } = props;

  const [editando, setEditando] = useState(false);

  function ModoEdicionActivado() {
    const [valor, setValor] = useState(tarea.tarea);

    return (
      <>
        <input type="text" value={valor} />
        <button className="btn" onClick={() => setEditando(false)}>
          GUARDAR
        </button>
        <button className="btn btnBorrar">BORRAR</button>
      </>
    );
  }

  function ModoEdicionDesactivado() {
    return (
      <>
        <span>{tarea.tarea}</span>
        <button className="btn btnEditar" onClick={() => setEditando(true)}>
          ACTUALIZAR
        </button>
        <button className="btn btnBorrar">ELIMINAR</button>
      </>
    );
  }

  return (
    <>
      <div className="contenedorTarea" id={tarea.id}>
        {editando ? <ModoEdicionActivado /> : <ModoEdicionDesactivado />}
      </div>
    </>
  );
}
