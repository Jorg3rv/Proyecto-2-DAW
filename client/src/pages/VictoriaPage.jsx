import React, { useContext, useEffect } from "react";
import { ItinerarioContext } from "../context/ItinerarioContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VictoriaPage = () => {
  const navigate = useNavigate();
  const { caso } = useContext(ItinerarioContext);
  const { setCurrentCaso, currentCaso, itinerario, selectedOption } =
    useContext(ItinerarioContext);

  const handleContinuar = async () => {
    console.log("selectedOption: ", selectedOption);
    let inserCasoData = await axios.post("http://54.88.52.250/api/v1/caso", {
      caso: selectedOption,
    });

    console.log("inserCasoData: ", inserCasoData);

    setCurrentCaso(currentCaso + 1);
    if (currentCaso + 1 == itinerario.idCasos.length) {
      setCurrentCaso(0);
      navigate("/main");
    } else {
      navigate("/partida");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("http://44.205.198.225/imagenes/${caso.imagen_recompensa}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
        }}
      >
        <h1 className="titulo-final">HAS CONSEGUIDO {caso.recompensa}</h1>
      </div>

      <button onClick={handleContinuar} className="mi-btn-infantil">
        Continuemos
      </button>
    </div>
  );
};

export default VictoriaPage;
