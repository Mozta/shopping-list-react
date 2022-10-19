import React, { useState, useEffect } from "react";
import Boton from "../estilos/boton";
import { Button } from "react-bootstrap";

const FormularioLogin = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    console.log("Montando componente...");
  }, []);

  /* const onChangeUser = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };
  const onChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }; */

  const onChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "user") {
      setUser(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "password2") {
      setPassword2(e.target.value);
    }
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (user === "Rafa" && password === "123") {
      props.cambiarSesion(true);
    } else {
      setUser("");
      setPassword("");
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <p>Usuario: {user}</p>
      <p>Contraseña: {password}</p>

      <div>
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password2">Contraseña con useEffect</label>
        <input
          type="password"
          name="password2"
          id="password2"
          value={password2}
          onChange={onChange}
        />
      </div>
      {/* <button>Iniciar sesión</button> */}
      <Boton rojo>Iniciar sesión</Boton>
      <Button>Registrarse</Button>
    </form>
  );
};

export default FormularioLogin;
