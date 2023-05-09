import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const AgresivaPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/tormenta.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Player ref={videoRef} playsInline autoPlay muted>
          <source src="/background-main.mp4" type="video/mp4" />
          <ControlBar disableDefaultControls={true} autoHide={false} />
        </Player> */}

      <div className="recuadro">
        <div
          style={{
            display: "flex",
            padding: "2rem 4rem",
            gap: "1rem",
            flexDirection: "column",
            height: "50%",
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>
          La profesora pregunta, ¿dónde está Lucas? 
Un niño contesta: en el pasillo, se ha caído. 
¿Y no le habéis ayudado?
Llegaba tarde, no podía. 
Si un compañero se cae ¿qué debemos hacer?
          </h2>
          <h2 style={{ color: "white" }}>Elige una opcion:</h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "2rem 4rem",
            justifyContent: "space-between",
          }}
        >
          <Link className="links" to="/victoria">
            <button className="mi-btn-caso">
            Mal, sé que no lo he hecho bien y le acompaño a la enfermería.
            </button>
          </Link>

          <Link className="links" to="/fracaso">
            <button className="mi-btn-caso">
            Me callo, ha sido muy gracioso. 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgresivaPage;
