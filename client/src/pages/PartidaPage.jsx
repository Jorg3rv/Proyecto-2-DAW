import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { shuffleArray } from "../helpers/utils";
import { ItinerarioContext } from "../context/ItinerarioContext";

const PartidaPage = () => {
  const { caso, setSelectedOption } =
    useContext(ItinerarioContext);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (caso) {
      console.log("CASO: ", caso);
      const fields = [
        {
          type: "agresiva",
          text: caso.texto_Opcion_Agresiva,
          img: caso.imagen_Opcion_Agresiva,
        },
        {
          type: "victoria",
          text: caso.texto_Opcion_Avanzada,
          img: caso.imagen_Opcion_Avanzada,
          name: "avanzada",
        },
        {
          type: "victoria",
          text: caso.texto_Opcion_Basica,
          img: caso.imagen_Opcion_Basica,
          name: "basica",
        },
        {
          type: "pasiva",
          text: caso.texto_Opcion_Pasiva,
          img: caso.imagen_Opcion_Pasiva,
        },
      ];
      const shuffledOptions = shuffleArray(fields);
      setOptions(shuffledOptions);
      setLoading(false);
    }
  }, [caso]);

  useEffect(() => {
    console.log("OPCIONES: ", options);
  }, [options]);

  const handleClickOption = (name) => {
    if (!name) return;

    setSelectedOption( { idCaso: caso.id, name: name });
  };

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
      {loading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              // backgroundColor: "blue",
              padding: "20px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {caso.nombre}
          </h1>

          <div className="recuadro">
            <div
              style={{
                display: "flex",
                padding: "2rem 4rem",
                gap: "1rem",
                flexDirection: "column",
              }}
              className="opciones"
            >
              <h2 style={{ color: "white" }}>{caso.texto_intro}</h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                padding: "2rem 4rem",
                justifyContent: "space-between",
              }}
            >
              {options.map((option, index) => {
                console.log("OPTION: ", option);
                return (
                  <Link className="links" to={`/${option.type}`}>
                    <button
                      onClick={() => handleClickOption(option?.name)}
                      className="mi-btn-caso"
                      style={{
                        backgroundImage: `url("http://44.205.198.225/imagenes/${option.img}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(255,255,255,0.8)",
                          height: 'fit-content',
                        }}
                      >
                        {option.text}
                      </div>
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartidaPage;
