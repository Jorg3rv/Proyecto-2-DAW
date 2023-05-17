import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
import imagen from './osito_avatar.jpg';
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";


const PrePartidaPage = () => {
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
    {/* <Player ref={videoRef} playsInline autoPlay muted>
        <source src="/background-main.mp4" type="video/mp4" />
        <ControlBar disableDefaultControls={true} autoHide={false} />
      </Player> */}

    <div className="recuadro">
      <div
        style={{
          display: "flex",
          padding: "2rem 4rem",
         
          flexDirection: "column",
          height: "50%",
        }}
        className="opciones"
      >
    <h2 style={{ color: "white" }}>
    Pasando un día con Poncho el oso. 
    </h2>
    <div >
      <img src="osito.png" alt="osito" className="osito"/>
    </div>
    <button className="mi-btn-menu-pre ">
            <Link className="links" to="/partida">
              Comenzemos
            </Link>
          </button>
    </div>
      </div>
    </div>
  );
};

export default PrePartidaPage;