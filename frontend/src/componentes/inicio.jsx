/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Inicio = ({ usuario, setUsuario }) => {
    const navigate = useNavigate(); // Hook para redirigir

    const handleSignOut = () => {
        // Simula el cierre de sesión
        setUsuario(null); // Elimina el usuario del estado
        navigate("/login"); // Redirige a la página de inicio de sesión
    };

    return (
        <div>
            <h1>
                Bienvenido, usuario {usuario}{" "}
                <button onClick={handleSignOut}>Cerrar Sesión</button>
            </h1>
        </div>
    );
};

export default Inicio;