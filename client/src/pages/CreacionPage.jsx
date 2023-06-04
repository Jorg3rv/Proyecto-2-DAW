import React, { useState } from "react";
import axios from "axios";

const CreacionPage = () => {
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
    const opcionesBasicas =
      document.getElementsByClassName("opcionesBasicas")[0];
    opcionesBasicas.style.display = "none";

    const opcionesRedencion =
      document.getElementsByClassName("opcionesRedencion")[0];
    opcionesRedencion.style.display = "none";

    const opcionesIntro = document.getElementsByClassName("opcionesIntro")[0];
    opcionesIntro.style.gap = ".5rem";
    opcionesIntro.style.display = "flex";
    opcionesIntro.style.flexDirection = "column";
    opcionesIntro.style.border = "4px solid #00ff93";
    opcionesIntro.style.borderRadius = "25px";
    opcionesIntro.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesIntro.style.padding = "2rem";
  };

  const cambiarBasicos = () => {
    const opcionesBasicas =
      document.getElementsByClassName("opcionesBasicas")[0];
    opcionesBasicas.style.gap = ".5rem";
    opcionesBasicas.style.display = "flex";
    opcionesBasicas.style.flexDirection = "column";
    opcionesBasicas.style.minWidth = "500px";
    opcionesBasicas.style.width = "1000px";
    opcionesBasicas.style.border = "4px solid #00ff93";
    opcionesBasicas.style.borderRadius = "25px";
    opcionesBasicas.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesBasicas.style.padding = "2rem";

    const opcionesRedencion =
      document.getElementsByClassName("opcionesRedencion")[0];
    opcionesRedencion.style.display = "none";

    const opcionesIntro = document.getElementsByClassName("opcionesIntro")[0];
    opcionesIntro.style.display = "none";

    id_valor = document.getElementsByName("id_valor")[0].value;
    nombre = document.getElementsByName("nombre")[0].value;
    texto_intro = document.getElementsByName("texto_intro")[0].value;
  };

  const redenciones = () => {
    document.getElementsByClassName("opcionesBasicas")[0].style =
      "display:none";
    const opcionesRedencion =
      document.getElementsByClassName("opcionesRedencion")[0];
    opcionesRedencion.style.gap = ".5rem";
    opcionesRedencion.style.display = "flex";
    opcionesRedencion.style.flexDirection = "column";
    opcionesRedencion.style.minWidth = "500px";
    opcionesRedencion.style.width = "1000px";
    opcionesRedencion.style.border = "4px solid #00ff93";
    opcionesRedencion.style.borderRadius = "25px";
    opcionesRedencion.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesRedencion.style.padding = "2rem";

    document.getElementsByClassName("opcionesIntro")[0].style = "display:none";
    texto_Opcion_Basica = document.getElementsByName("texto_Opcion_Basica")[0]
      .value;
    texto_Opcion_Avanzada = document.getElementsByName(
      "texto_Opcion_Avanzada"
    )[0].value;
    texto_Opcion_Pasiva = document.getElementsByName("texto_Opcion_Pasiva")[0]
      .value;
    texto_Opcion_Agresiva = document.getElementsByName(
      "texto_Opcion_Agresiva"
    )[0].value;
    texto_Redencion_Pasiva = document.getElementsByName(
      "texto_Redencion_Pasiva"
    )[0]?.value;
    imagenBasica = document.getElementsByName("imagenBasica")[0].files[0];
    imagenAvanzada = document.getElementsByName("imagenAvanzada")[0].files[0];
    imagenAgresiva = document.getElementsByName("imagenAgresiva")[0].files[0];
    imagenPasiva = document.getElementsByName("imagenPasiva")[0].files[0];
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
      .post("http://54.88.52.250/api/v1/caso/insertar", formData, config)
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
      <form onSubmit={handleSubmit}>
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
            color: "white",
            fontSize: "24px",
          }}
          className="opcionesIntro"
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
          <button
            type="button"
            className="button-gestion"
            style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
            onClick={cambiarBasicos}
          >
            Siguiente
          </button>
        </div>

        <div
          style={{
            display: "none",
          }}
          className="opcionesBasicas"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Opcion Basica</label>
              <input type="text" name="texto_Opcion_Basica" />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Opcion Avanzada</label>
              <input type="text" name="texto_Opcion_Avanzada" />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              {" "}
              <label>Texto Opcion Pasiva</label>
              <input type="text" name="texto_Opcion_Pasiva" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Opcion Agresiva</label>
              <input type="text" name="texto_Opcion_Agresiva" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Imagen Opcion Basica</label>
            <input style={{ color: "white" }} type="file" name="imagenBasica" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Imagen Opcion Avanzada</label>
            <input
              style={{ color: "white" }}
              type="file"
              name="imagenAvanzada"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Imagen Opcion Pasiva</label>
            <input style={{ color: "white" }} type="file" name="imagenPasiva" />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Imagen Opcion Agresiva</label>
            <input
              style={{ color: "white" }}
              type="file"
              name="imagenAgresiva"
            />
          </div>
          <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
            <button
              className="button-gestion"
              style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
              type="button"
              onClick={cambiarIntro}
            >
              Atrás
            </button>
            <button
              className="button-gestion"
              style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
              type="button"
              onClick={redenciones}
            >
              Siguiente
            </button>
          </div>
        </div>

        <div className="opcionesRedencion" style={{ display: "none" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label>Textnao Redencion Pasiva</label>
            <textarea me="texto_Redencion_Pasiva" />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label>Texto Redencion Agresiva</label>
            <textarea name="texto_Redencion_Agresiva" />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label>Texto Redencion Agresiva Buena</label>
              <input type="text" name="texto_Redencion_Buena_Agresiva" />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Redencion Pasiva Mala</label>
              <input type="text" name="texto_Redencion_Mala_Pasiva" />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Redencion Agresiva Mala</label>
              <input type="text" name="texto_Redencion_Mala_Agresiva" />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Imagen Redencion Pasiva</label>
              <input type="file" name="imagenRedencionPasiva" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Imagen Redencion Agresiva</label>
              <input type="file" name="imagenRedencionAgresiva" />
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
            <button
              className="button-gestion"
              style={{ padding: "1rem", width: "50%", alignSelf: "center" }}
              type="button"
              onClick={cambiarBasicos}
            >
              Atrás
            </button>
            <button
              className="button-gestion"
              style={{ padding: "1rem", width: "50%", alignSelf: "center" }}
              type="submit"
            >
              Crear
            </button>
          </div>
        </div>
      </form>
      <div className="datos"></div>
    </div>
  );
};

export default CreacionPage;
