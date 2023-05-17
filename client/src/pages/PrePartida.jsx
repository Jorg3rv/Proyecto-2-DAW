import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const PrePartidaPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/cielo.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

<<<<<<< HEAD
    <div className="recuadro">
      <div
        style={{
          display: "flex",
          padding: "2rem 4rem",
         
          flexDirection: "column",
          height: "50%",
        }}
        className="opciones"
      >
    <h2 style={{ color: "white" }}>
    Pasando un día con Poncho el oso. 
    </h2>
    <div >
      <img src="osito.png" alt="osito" className="osito"/>
    </div>
    <button className="mi-btn-menu-pre ">
=======
      <div className="recuadro">
        <div
          style={{
            display: "flex",
            padding: "2rem 4rem",

            flexDirection: "column",
            height: "50%",
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>
            Pasando un día con… (Y el nombre del personaje)
          </h2>
          <div>
            <img src="osito.png" alt="osito" className="osito" />
          </div>
          <button className="mi-btn-menu-pre ">
>>>>>>> a50f0b505e738fac800c623fd03d5a0f4b4de8c5
            <Link className="links" to="/partida">
              Comenzemos
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrePartidaPage;
