import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { shuffleArray } from "../helpers/utils";
import { CircularProgress } from "@mui/material";
import { ItinerarioContext } from "../context/ItinerarioContext";
import Bocata from "../component/common/bocata";

const PasivaPage = () => {
  const [loading, setLoading] = useState(true);
  const [texto, setTexto] = useState(null);
  const [options, setOptions] = useState([]);
  const { caso, setSelectedOption } =
    useContext(ItinerarioContext);
  const [textoProfesor, setTextoProfesor] = useState([]);
  const [textoAlumno, setTextoAlumno] = useState([]);

  useEffect(() => {
    setTexto(caso.texto_Redencion_Pasiva);

    const fields = [
      {
        type: "fracaso",
        text: caso.texto_Redencion_Mala_Pasiva,
        name: "pasiva_reden_mala",
      },
      {
        type: "victoria",
        text: caso.texto_Redencion_Buena_Pasiva,
        name: "pasiva_reden_buena",
      },
    ];
    const shuffledOptions = shuffleArray(fields);
    setOptions(shuffledOptions);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (texto) {
      const segments = texto
        .split(/P-|A-/)
        .filter((segment) => segment.trim() !== "");
      const textosProfesor = [];
      const textosAlumno = [];
      let isProfesor = true;

      for (const segment of segments) {
        if (isProfesor) {
          textosProfesor.push(segment);
        } else {
          textosAlumno.push(segment);
        }
        isProfesor = !isProfesor;
      }

      setTextoProfesor((textoProfesor) => [
        ...textoProfesor,
        ...textosProfesor,
      ]);
      setTextoAlumno((textoAlumno) => [...textoAlumno, ...textosAlumno]);
    }
  }, [texto]);

  useEffect(() => {
    console.log("TEXTO PROFESOR: ", textoProfesor);
    console.log("TEXTO ALUMNO: ", textoAlumno);
  }, [textoProfesor, textoAlumno]);

  const handleClickOption = (name) => {
    if (!name) return;

    setSelectedOption({ idCaso: caso.id, name: name });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("http://44.205.198.225/imagenes/${caso.imagen_Redencion_Pasiva}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="recuadro">
          <div
            style={{
              display: "flex",
              padding: "0 4rem",
              justifyContent: "space-between",
            }}
            className="opciones"
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              {textoProfesor.map((texto) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  <img src="profe.jpg" style={{height:'30%'}}></img>
                  <Bocata className="dialogue-bubble" texto={texto} />
                </div>
              ))}
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              {textoAlumno.map((texto) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  <Bocata texto={texto} className="dialogue-bubble-right" />
                  <img src="Sito.jpg" style={{width:'10%'}}></img>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              padding: "2rem 4rem",
              gridTemplateColumns: "repeat(2,1fr)",
              marginTop: "5%",
            }}
          >
            {options.map((option) => (
              <Link className="links" to={`/${option.type}`}>
                <button
                  onClick={() => handleClickOption(option?.name)}
                  className="mi-btn-caso-redencion"
                >
                  {option.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasivaPage;
