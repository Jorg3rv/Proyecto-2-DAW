import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const PasivaPage = () => {
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
            flexDirection: "column"
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>
          P-¿dónde está Lucas? 
A-En el pasillo, se ha caído. 
P-¿Y no le habéis ayudado?
A-Llegaba tarde, no podía. 
P-Si un compañero se cae ¿qué debemos hacer?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            padding: "2rem 4rem",
            gridTemplateColumns:"repeat(2,1fr)"
          }}
        >
          <Link className="links" to="/victoria">
            <button className="mi-btn-caso-redencion">
            Tenemos que ayudarle, ¡vamos! 
            </button>
          </Link>

          <Link className="links" to="/fracaso">
            <button className="mi-btn-caso-redencion">
            Nada, ya le ayudarán.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasivaPage;
