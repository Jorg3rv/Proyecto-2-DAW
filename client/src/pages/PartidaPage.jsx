import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { shuffleArray } from "../helpers/randomOptions";

const PartidaPage = () => {
  const [loading, setLoading] = useState(true);
  const [caso, setCaso] = useState(null);
  const [options, setOptions] = useState([]);


  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/v1/casos/${1}`);
      console.log("LA DATA ENTERA: ", data.data);
      setCaso(data.data);
      const fields = [
        {
          type: "agresiva",
          text: data.data[0].texto_Opcion_Agresiva,
        },
        {
          type: "victoria",
          text: data.data[0].texto_Opcion_Avanzada,
        },
        {
          type: "victoria",
          text: data.data[0].texto_Opcion_Basica,
        },
        {
          type: "pasiva",
          text: data.data[0].texto_Opcion_Pasiva,
        },
      ];
      const shuffledOptions = shuffleArray(fields);
      setOptions(shuffledOptions);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    console.log("OPCIONES: ", options);
  }, [options]);

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
      {loading ? <CircularProgress /> : (  <div className="recuadro">
        <div
          style={{
            display: "flex",
            padding: "2rem 4rem",
            gap: "1rem",
            flexDirection: "column",
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>{caso[0].texto_intro}</h2>
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
          {options.map((option,index) => {
            return (
              <Link className="links" to={`/${option.type}`}>
                <button className="mi-btn-caso" 
                style={{
                  backgroundImage: `url("/imagen${index+1}.jpg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                >{option.text}</button>
              </Link>
            );
          })}
        </div>
      </div>)}
    
    </div>
  );
};

export default PartidaPage;
