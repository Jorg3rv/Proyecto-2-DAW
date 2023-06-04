import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItinerarioContext } from "../context/ItinerarioContext";
import axios from "axios";

const FracasoPage = () => {
  const navigate = useNavigate();
  const { caso } = useContext(ItinerarioContext);
  const { setCurrentCaso, currentCaso, itinerario, selectedOption } =
    useContext(ItinerarioContext);

  const handleContinuar = async () => {
    console.log("selectedOption: ", selectedOption);
    let inserCasoData = await axios.post("/api/v1/caso", {
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
        backgroundImage: `url("http://44.205.198.225/imagenes/${caso.imagen_fracaso}")`,
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
        <h1 className="titulo-final">NO HAS CONSEGUIDO {caso.recompensa}</h1>
      </div>

      <button onClick={handleContinuar} className="mi-btn-infantil">
        Continuemos
      </button>
    </div>
  );
};

export default FracasoPage;
