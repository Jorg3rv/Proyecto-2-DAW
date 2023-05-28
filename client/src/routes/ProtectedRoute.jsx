import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const checksession = async () => {
      try {
        const { data } = await axios.get("/api/v1/login/checksession");
        console.log("este es el res del checksession: ", data.status);
        if (data.status === 200) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      } catch (error) {
        console.log("ERROR AL CHECKER EL LOGIN: ", error);
      }
      setLoading(false);
    };

    checksession();
  }, []);

  return loading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : isLogged ? (
    component
  ) : (
    navigate("/")
  );
};

export default ProtectedRoute;
