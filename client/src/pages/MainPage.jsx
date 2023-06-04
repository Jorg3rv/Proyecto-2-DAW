import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { ItinerarioContext } from "../context/ItinerarioContext";
import axios from "axios";

const MainPage = () => {
  const { currentProfesor, setCurrentProfesor } = useContext(ItinerarioContext);

  useEffect(() => {
    setCurrentProfesor(localStorage.getItem("username_profe"));
  }, []);

  const handleLogout = async () => {
    await axios.get("/api/v1/login/logout");
    localStorage.removeItem("username_profe");
    window.location.reload();
  };

  return (
    currentProfesor && (
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
            width: "500px",
            height: "50px",
            marginLeft: "auto",
            borderRadius: "0",
            marginRight: "1rem",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
          className="recuadro"
        >
          <p>{currentProfesor}</p>
          <LogoutIcon style={{ cursor: "pointer" }} onClick={handleLogout} />
        </div>

        <div className="recuadro">
          <div className="titulo">supervalues</div>
          <div className="botones">
            <button className="mi-btn-start">
              <Link className="links" to="/prePartida">
                Empezar
              </Link>
            </button>
            <button className="mi-btn-menu ">
              <Link className="links" to="/gestionar">
                Gestionar
              </Link>
            </button>

          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "3rem",
              alignItems: "center",
              justifyContent: "center",
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
              Un videojuego para trabajar los valores en el aula
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default MainPage;
