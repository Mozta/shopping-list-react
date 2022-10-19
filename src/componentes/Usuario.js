import React from "react";
// import Titulo from "./Titulo";
import { TituloRojo, TituloVerde } from "./Titulo";

const Alumno = () => {
  const alumnos = ["Andrea", "Aldo", "Abraham"];
  return (
    <>
      <TituloRojo usuario="Rafa" />
      <TituloVerde usuario="Yaz"/>

      <h3>Lista de alumnos</h3>
      <ul>
        {alumnos.map((nombre, i) => {
          return <li key={i}>{nombre}</li>;
        })}
      </ul>
    </>
  );
};

export default Alumno;
