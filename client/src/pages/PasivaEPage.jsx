import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const PasivaEPage = () => {
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
          Se nota que no habéis sabido poneros de acuerdo. ¿Qué podemos hacer para solucionarlo?
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
          <Link className="links" to="/victoriaE">
            <button className="mi-btn-caso-redencion">
            Nos volvemos a reunir y llegamos a un acuerdo escuchándonos.
            </button>
          </Link>

          <Link className="links" to="/fracasoE">
            <button className="mi-btn-caso-redencion">
            Ya está hecho y no nos queremos volver a reunir.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasivaEPage;