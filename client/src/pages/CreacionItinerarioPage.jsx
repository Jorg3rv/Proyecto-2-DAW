import React, { useState, useEffect } from "react";
import axios from "axios";

const CreacionItinerarioPage = () => {
  const [textInput, setTextInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [hiddenInput, setHiddenInput] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://54.88.52.250/api/v1/casos/pedir")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        // Manejar errores si es necesario
      });
  }, []);

  const handleAdd = () => {
    setHiddenInput((prevHiddenInput) => [...prevHiddenInput, selectedOption]);
    document.getElementsByClassName("casos_añadidos")[0].innerHTML +=
      "<div>" +
      document.getElementsByTagName("select")[0].selectedOptions[0].text +
      "</div>";
  };

  const handleSubmit = async () => {
    await axios
      .post("http://18.233.219.179/api/v1/itinerario/insertar", {
        nombre: textInput,
        array: hiddenInput,
      })
      .then((response) => {
        // Realizar acciones adicionales si es necesario
      })
      .catch((error) => {
        // Manejar errores si es necesario
      });
  };

  const handleShowData = () => {
    console.log("Datos a enviar:");
    console.log("Texto:", textInput);
    console.log("IDs seleccionadas:", hiddenInput);
  };

  return (
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
          gap: ".5rem",
          display: "flex",
          flexDirection: "column",
          width: "500px",
          border: "4px solid #00ff93",
          borderRadius: "25px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          padding: "2rem",
        }}
        className="opcionesIntro"
      >
        <label>Nombre del Itinerario</label>{" "}
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <label>Caso a añadir</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
        <button onClick={handleAdd}>Añadir</button>
        <br></br>
        <label>Casos añadidos al Itinerario:</label>
        <div className="casos_añadidos"></div>
        {hiddenInput.map((option, index) => (
          <input type="hidden" key={index} value={option} />
        ))}
        <button onClick={handleSubmit}>Enviar</button>
        <button onClick={handleShowData}>Mostrar Datos</button>
      </div>
    </div>
  );
};

export default CreacionItinerarioPage;
