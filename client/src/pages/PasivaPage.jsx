import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { shuffleArray } from "../helpers/randomOptions";
import { CircularProgress } from "@mui/material";

const PasivaPage = () => {
  const [loading, setLoading] = useState(true);
  const [texto, setTexto] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/v1/casos/pasiva/${1}`);
      console.log("LA DATA ENTERA: ", data.data);
      setTexto(data.data[0].texto_Redencion_Pasiva);
      const fields = [
        {
          type: "fracaso",
          text: data.data[0].texto_Redencion_Mala_Pasiva,
        },
        {
          type: "victoria",
          text: data.data[0].texto_Redencion_Buena_Pasiva,
        },
      ];
      const shuffledOptions = shuffleArray(fields);
      setOptions(shuffledOptions);
      setLoading(false);
    })();
  }, []);

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
      {loading ? (
        <CircularProgress />
      ) : (
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
            <h2 style={{ color: "white" }}>
              {texto}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              padding: "2rem 4rem",
              gridTemplateColumns: "repeat(2,1fr)",
            }}
          >
            {options.map((option) => (
              <Link className="links" to={`/${option.type}`}>
                <button className="mi-btn-caso-redencion">
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
