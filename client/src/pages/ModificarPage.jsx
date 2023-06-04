import React, { useState, useEffect } from "react";
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
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

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

const datosCasoCambiar = async(id) =>{
console.log(id);
await axios.post('http://54.88.52.250/api/v1/caso/elegido', {
  id: id
})
.then((response) =>{
console.log(response.data[0]);
 id_valor = response.data[0].id_valor;
 nombre = response.data[0].nombre;
 texto_intro = response.data[0].texto_intro;
 texto_Opcion_Basica = response.data[0].texto_Opcion_Basica;
 texto_Opcion_Avanzada = response.data[0].texto_Opcion_Avanzada;
 texto_Opcion_Pasiva = response.data[0].texto_Opcion_Pasiva;
 texto_Opcion_Agresiva = response.data[0].texto_Opcion_Agresiva;
 texto_Redencion_Pasiva = response.data[0].texto_Redencion_Pasiva;
 texto_Redencion_Buena_Pasiva = response.data[0].texto_Redencion_Buena_Pasiva;
 texto_Redencion_Mala_Pasiva = response.data[0].texto_Redencion_Mala_Pasiva;
 texto_Redencion_Agresiva = response.data[0].texto_Redencion_Agresiva;
 texto_Redencion_Buena_Agresiva = response.data[0].texto_Redencion_Buena_Agresiva;
 texto_Redencion_Mala_Agresiva = response.data[0].texto_Redencion_Mala_Agresiva;
})


}


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
    const opcionesBasicas =
      document.getElementsByClassName("opcionesBasicas")[0];
    opcionesBasicas.style.gap = ".5rem";
    opcionesBasicas.style.display = "flex";
    opcionesBasicas.style.flexDirection = "column";
    opcionesBasicas.style.width = "1000px";
    opcionesBasicas.style.border = "4px solid #00ff93";
    opcionesBasicas.style.borderRadius = "25px";
    opcionesBasicas.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesBasicas.style.padding = "2rem";
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
    opcionesRedencion.style.width = "1000px";
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
        <select
          value={selectedOption}
          onChange={(event) => datosCasoCambiar(event.target.value)}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
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
          <textarea name="texto_intro" placeholder="Texto Intro"  />
          <label>Valor</label>
          <select name="id_valor" >
            <option value="1">Amistad</option>
            <option value="2">Trabajo en equipo</option>
            <option value="3">Justicia</option>
            <option value="4">Tolerancia</option>
            <option value="5">Bondad</option>
          </select>
          <label>Nombre</label>
          <input type="text" name="nombre" />
          <button className="button-gestion" onClick={cambiarBasicos}>
            Siguiente
          </button>
        </div>

        <div className="opcionesBasicas" style={{ display: "none" }}>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Imagen Opcion Basica</label>
              <input type="file" name="imagenBasica" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Imagen Opcion Avanzada</label>
              <input type="file" name="imagenAvanzada" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Imagen Opcion Pasiva</label>
              <input type="file" name="imagenPasiva" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Imagen Opcion Agresiva</label>
              <input type="file" name="imagenAgresiva" />
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
            <button
              style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
              className="button-gestion"
              onClick={cambiarIntro}
            >
              Atrás
            </button>
            <button
              style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
              className="button-gestion"
              onClick={redenciones}
            >
              Siguiente
            </button>
          </div>
        </div>

        <div className="opcionesRedencion" style={{ display: "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Redencion Pasiva</label>
              <textarea name="texto_Redencion_Pasiva" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Redencion Agresiva</label>
              <textarea name="texto_Redencion_Agresiva" />
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
              <label>Texto Redencion Pasiva Buena</label>
              <input type="text" name="texto_Redencion_Buena_Pasiva" />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "45%" }}
            >
              <label>Texto Redencion Agresiva Buena</label>
              <input type="text" name="texto_Redencion_Buena_Agresiva" />
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
              style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
              onClick={cambiarBasicos}
            >
              Atrás
            </button>
            <button
              className="button-gestion"
              style={{ marginTop: "1rem", width: "50%", alignSelf: "center" }}
              type="submit"
            >
              Crear
            </button>
          </div>
        </div>
      </form>
      <div className="datos">

      </div>
    </div>

  );
};

export default ModificarPage;
