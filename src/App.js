import "./App.css";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <div className="contenedorPrincipal">
        <h1>TO-DO LIST</h1>

        <div className="contenedorFormulario">
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
