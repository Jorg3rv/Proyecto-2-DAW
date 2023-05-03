import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const PartidaPage = ()=> {
    return(
        <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url("/img1.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <Player ref={videoRef} playsInline autoPlay muted>
          <source src="/background-main.mp4" type="video/mp4" />
          <ControlBar disableDefaultControls={true} autoHide={false} />
        </Player> */}
  

        <div className="recuadro">

            <div className="opciones">
            <h2 className="textoCaso1">Pasando un día con… (Y el nombre del personaje)
Todos los días entramos al cole corriendo, y hoy se ha caído un niño. ¿Qué puedo hacer?</h2>
<h2 className="textoCaso2">Elige una opcion:</h2>

  <div className="botones-fila-1">
  <Link className="links" to="/redencion">
    <button className="mi-btn-caso1">
      
      Llego tarde, ya le ayudará alguien.
     
    </button>
    </Link>


    <Link className="links" to="/partida">
    <button className="mi-btn-caso2">
     
      Puedo ayudar a que se levante
      
    </button>
    </Link>
  </div>
   
  <div className="botones-fila-2">
  <Link className="links" to="/partida">
    <button className="mi-btn-caso3">
      Puedo ayudarle y pedir ayuda por si se ha hecho daño.
    </button>
    </Link>
    </div>
    

    <Link className="links" to="/redencion">
    <button className="mi-btn-caso4">
    JAJAJA ¡qué torpe! Me voy a clase.
      
    </button>
    </Link>
    </div>
  </div>
  <div
    style={{
      display: "flex",
      gap: "1rem",
      paddingTop: "3rem",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Agrega aquí cualquier otro contenido adicional que necesites */}
  </div>
  
</div>
    );
};

export default PartidaPage;

