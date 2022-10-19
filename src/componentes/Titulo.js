import React from "react";

const TituloRojo = ({usuario}) => {
  const name = usuario;
  return (
    <h1 className="titulo" style={{ color: "red" }}>
      Hola {name}
    </h1>
  );
};

const TituloVerde = (props) => {
  //   console.log(props);
  //   const name = "Rafael";
  const name = props.usuario;
  return (
    <h1 className="titulo" style={{ color: "green" }}>
      Hola {name}
    </h1>
  );
};

// export default Titulo;
export { TituloRojo, TituloVerde };
