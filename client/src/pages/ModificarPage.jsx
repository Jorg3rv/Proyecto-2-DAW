import React, { useState } from "react";
import axios from "axios";

const ModificarPage = () => {
  let id_valor = "";
  let nombre = "";
  let texto_intro = "";
  let texto_Opcion_Basica = "";
  let texto_Opcion_Avanzada = "";
  let texto_Opcion_Pasiva = "";
  let texto_Opcion_Agresiva = "";
  let texto_Redencion_Pasiva = "";
  let texto_Redencion_Buena_Pasiva = "";
  let texto_Redencion_Mala_Pasiva = "";
  let texto_Redencion_Agresiva = "";
  let texto_Redencion_Buena_Agresiva = "";
  let texto_Redencion_Mala_Agresiva = "";
  let imagenBasica = null;
  let imagenAvanzada = null;
  let imagenAgresiva = null;
  let imagenPasiva = null;
  let imagenRedencionPasiva = null;
  let imagenRedencionAgresiva = null;

  const cambiarIntro = () => {
    document.getElementsByClassName("opcionesBasicas")[0].style.display =
      "none";
    document.getElementsByClassName("opcionesRedencion")[0].style.display =
      "none";
    const opcionesIntro = document.getElementsByClassName("opcionesIntro")[0];
    opcionesIntro.style.gap = ".5rem";
    opcionesIntro.style.display = "flex";
    opcionesIntro.style.flexDirection = "column";
    opcionesIntro.style.width = "500px";
    opcionesIntro.style.border = "4px solid #00ff93";
    opcionesIntro.style.borderRadius = "25px";
    opcionesIntro.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesIntro.style.padding = "2rem";
  };

  const cambiarBasicos = () => {
    document.getElementsByClassName("opcionesBasicas")[0].style.display =
      "grid";
    document.getElementsByClassName("opcionesRedencion")[0].style.display =
      "none";
    document.getElementsByClassName("opcionesIntro")[0].style.display = "none";
    const id_valor = document.getElementsByName("id_valor")[0].value;
    const nombre = document.getElementsByName("nombre")[0].value;
    const texto_intro = document.getElementsByName("texto_intro")[0].value;
  };

  const redenciones = () => {
    document.getElementsByClassName("opcionesBasicas")[0].style.display =
      "none";
    const opcionesRedencion =
      document.getElementsByClassName("opcionesRedencion")[0];
    opcionesRedencion.style.gap = ".5rem";
    opcionesRedencion.style.display = "flex";
    opcionesRedencion.style.flexDirection = "column";
    opcionesRedencion.style.width = "500px";
    opcionesRedencion.style.border = "4px solid #00ff93";
    opcionesRedencion.style.borderRadius = "25px";
    opcionesRedencion.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesRedencion.style.padding = "2rem";
    document.getElementsByClassName("opcionesIntro")[0].style.display = "none";
    const texto_Opcion_Basica = document.getElementsByName(
      "texto_Opcion_Basica"
    )[0].value;
    const texto_Opcion_Avanzada = document.getElementsByName(
      "texto_Opcion_Avanzada"
    )[0].value;
    const texto_Opcion_Pasiva = document.getElementsByName(
      "texto_Opcion_Pasiva"
    )[0].value;
    const texto_Opcion_Agresiva = document.getElementsByName(
      "texto_Opcion_Agresiva"
    )[0].value;
    const texto_Redencion_Pasiva = document.getElementsByName(
      "texto_Redencion_Pasiva"
    )[0].value;
    const imagenBasica = document.getElementsByName("imagenBasica")[0].files[0];
    const imagenAvanzada =
      document.getElementsByName("imagenAvanzada")[0].files[0];
    const imagenAgresiva =
      document.getElementsByName("imagenAgresiva")[0].files[0];
    const imagenPasiva = document.getElementsByName("imagenPasiva")[0].files[0];
  };

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    texto_Redencion_Buena_Pasiva = document.getElementsByName(
      "texto_Redencion_Buena_Pasiva"
    )[0].value;
    texto_Redencion_Mala_Pasiva = document.getElementsByName(
      "texto_Redencion_Mala_Pasiva"
    )[0].value;
    texto_Redencion_Agresiva = document.getElementsByName(
      "texto_Redencion_Agresiva"
    )[0].value;
    texto_Redencion_Buena_Agresiva = document.getElementsByName(
      "texto_Redencion_Buena_Agresiva"
    )[0].value;
    texto_Redencion_Mala_Agresiva = document.getElementsByName(
      "texto_Redencion_Mala_Agresiva"
    )[0].value;
    imagenRedencionPasiva = document.getElementsByName(
      "imagenRedencionPasiva"
    )[0].files[0];
    imagenRedencionAgresiva = document.getElementsByName(
      "imagenRedencionAgresiva"
    )[0].files[0];
    const formData = new FormData();
    formData.append("id_valor", id_valor);
    formData.append("nombre", nombre);
    formData.append("texto_intro", texto_intro);
    formData.append("texto_Opcion_Basica", texto_Opcion_Basica);
    formData.append("texto_Opcion_Avanzada", texto_Opcion_Avanzada);
    formData.append("texto_Opcion_Pasiva", texto_Opcion_Pasiva);
    formData.append("texto_Opcion_Agresiva", texto_Opcion_Agresiva);
    formData.append("texto_Redencion_Pasiva", texto_Redencion_Pasiva);
    formData.append(
      "texto_Redencion_Buena_Pasiva",
      texto_Redencion_Buena_Pasiva
    );
    formData.append("texto_Redencion_Mala_Pasiva", texto_Redencion_Mala_Pasiva);
    formData.append("texto_Redencion_Agresiva", texto_Redencion_Agresiva);
    formData.append(
      "texto_Redencion_Buena_Agresiva",
      texto_Redencion_Buena_Agresiva
    );
    formData.append(
      "texto_Redencion_Mala_Agresiva",
      texto_Redencion_Mala_Agresiva
    );
    formData.append("imagen", imagenBasica);
    formData.append("imagen", imagenAvanzada);
    formData.append("imagen", imagenAgresiva);
    formData.append("imagen", imagenPasiva);
    formData.append("imagen", imagenRedencionPasiva);
    formData.append("imagen", imagenRedencionAgresiva);

    await axios
      .post("", formData, config)
      .then((response) => {
        console.log(response.data); // Manejar la respuesta del servidor
      })
      .catch((error) => {
        console.error(error); // Manejar errores
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          className="opcionesIntro"
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
        >
          <label>Texto de introducción</label>
          <textarea name="texto_intro" placeholder="Texto Intro" />
          <label>Valor</label>
          <select name="id_valor">
            <option value="1">Amistad</option>
            <option value="2">Trabajo en equipo</option>
            <option value="3">Justicia</option>
            <option value="4">Tolerancia</option>
            <option value="5">Bondad</option>
          </select>
          <label>Nombre</label>
          <input type="text" name="nombre" />
          <button onClick={cambiarBasicos}>Siguiente</button>
        </div>

        <div className="opcionesBasicas" style={{ display: "none" }}>
          <label>Texto Opcion Basica</label>
          <input type="text" name="texto_Opcion_Basica" />
          <label>Texto Opcion Avanzada</label>
          <input type="text" name="texto_Opcion_Avanzada" />
          <label>Texto Opcion Pasiva</label>
          <input type="text" name="texto_Opcion_Pasiva" />
          <label>Texto Opcion Agresiva</label>
          <input type="text" name="texto_Opcion_Agresiva" />
          <label>Imagen Opcion Basica</label>
          <input type="file" name="imagenBasica" />
          <label>Imagen Opcion Avanzada</label>
          <input type="file" name="imagenAvanzada" />
          <label>Imagen Opcion Pasiva</label>
          <input type="file" name="imagenPasiva" />
          <label>Imagen Opcion Agresiva</label>
          <input type="file" name="imagenAgresiva" />
          <button onClick={cambiarIntro}>Atrás</button>
          <button onClick={redenciones}>Siguiente</button>
        </div>

        <div className="opcionesRedencion" style={{ display: "none" }}>
          <label>Texto Redencion Pasiva</label>
          <textarea name="texto_Redencion_Pasiva" />
          <label>Texto Redencion Pasiva Buena</label>
          <input type="text" name="texto_Redencion_Buena_Pasiva" />
          <label>Texto Redencion Pasiva Mala</label>
          <input type="text" name="texto_Redencion_Mala_Pasiva" />
          <label>Texto Redencion Agresiva</label>
          <textarea name="texto_Redencion_Agresiva" />
          <label>Texto Redencion Agresiva Buena</label>
          <input type="text" name="texto_Redencion_Buena_Agresiva" />
          <label>Texto Redencion Agresiva Mala</label>
          <input type="text" name="texto_Redencion_Mala_Agresiva" />
          <label>Imagen Redencion Pasiva</label>
          <input type="file" name="imagenRedencionPasiva" />
          <label>Imagen Redencion Agresiva</label>
          <input type="file" name="imagenRedencionAgresiva" />
          <button onClick={cambiarBasicos}>Atrás</button>
          <button type="submit">Crear</button>
        </div>
      </form>
      <div className="datos"></div>
    </div>
  );
};

export default ModificarPage;
