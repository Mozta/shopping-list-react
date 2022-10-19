import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Alumno from "./componentes/Usuario";
import FormularioLogin from "./componentes/FormularioLogin";
import Boton from "./estilos/boton";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [sesion, cambiarSesion] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <>
      {sesion === true ? (
        <>
          <h1>{contador}</h1>
          <Alumno />
          {/* <button onClick={() => cambiarSesion(false)}>Cerrar sesion</button> */}
          <Boton onClick={() => cambiarSesion(false)}> Cerrar sesión</Boton>
          
          <button onClick={() => setContador(contador+1)}>Sumar</button>
        </>
      ) : (
        <>
          <h2>No has iniciado sesión</h2>
          <FormularioLogin cambiarSesion={cambiarSesion}/>
          {/* <button onClick={() => cambiarSesion(true)}>Iniciar sesion</button> */}
        </>
      )}
    </>
  );
};

root.render(<App />);
