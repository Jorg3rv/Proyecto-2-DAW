import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const VictoriaPage = () => {
  return (
    <div>
      <h1 className="titulo">HAS CONSEGUIDO LAS BOTAS DE LA AMISTAD</h1>

      <Link className="links" to="/equipo">
            <button className="mi-btn-caso-redencion">
            Continuemos
            </button>
          </Link>
          </div>
  );
};


export default VictoriaPage;