import React, { useState } from "react";
import axios from "axios";
import Imagen from "../imagenes/logo proyecto color.jpeg";


const Login = () => {
  const [usuario, setUser] = useState("");
  const [contraseña, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [registrando, setRegistrando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    try {
      // Realiza una solicitud a la base de datos para verificar el dato
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        usuario,
        contraseña,
      });

      setMessage(response.data.message); // Esperando 'message' del backend
    } catch (error) {
      // Muestra el error específico recibido del backend
      setMessage(
        error.response?.data.error || "Usuario o Contraseña incorrecta"
      );
    }
  };

  return (
    <div className="container">
      <header>
        <img src={Imagen} alt="" className="empresarial" />
        <h1>BIENVENIDOS A HELP DESK JCDB</h1>
      </header>

      <div className="row">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="bx bx-user"></i>
            <input
              type="text"
              placeholder="USUARIO"
              value={usuario}
              name="usuario"
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <i className="bx bx-lock-open"></i>
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={contraseña}
              name="contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            {registrando ? "Usuario o clave incorrecta" : "Aceptar"}
          </button>
        </form>
        {message && <p className="mensaje">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
