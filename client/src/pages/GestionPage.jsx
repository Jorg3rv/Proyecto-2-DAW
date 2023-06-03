import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const GestionPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url("/img1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        gap: "1rem",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
        }}
        className="recuadro"
      >
        <div className="botones">
          <button className="mi-btn-menu ">
            <Link className="links" to="/crear-partida">
              Crear Caso
            </Link>
          </button>
          <button className="mi-btn-menu ">
            <Link className="links" to="/modificar-partida">
              Modificar caso
            </Link>
          </button>
          <button className="mi-btn-menu ">
            <Link className="links" to="/crear-itinerario">
              Crear Itinerario
            </Link>
          </button>

          {/* <button className="mi-btn-start" onClick={testdb}>
                Consulta
              </button> */}
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            paddingTop: "3rem",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5rem",
          }}
        >
          <ArrowRightAltIcon style={{ color: "#00c271" }} fontSize="large" />
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Desde aqui podemos crear caso, modificar caso y crear itinerario
          </p>
        </div>
      </div>
    </div>
  );
};

export default GestionPage;
