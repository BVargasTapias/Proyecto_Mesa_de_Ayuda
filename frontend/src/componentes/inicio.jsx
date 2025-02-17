import React from "react";



const inicio =({correoUsuario} ) => {
    return (
        <div>

            <h1>Bienvenido  usuario   {correoUsuario} <button onClick={()=>signOut(auth)}>Cerrar Sesión</button></h1>
        </div>
    )
}

export default inicio