import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

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

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentCaso, setCurrentCaso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenAvanzada, setImagenAvanzada] = useState(null);
  const [imagenBasica, setImagenBasica] = useState(null);
  const [imagenAgresiva, setImagenAgresiva] = useState(null);
  const [imagenPasiva, setImagenPasiva] = useState(null);
  const [imagenRedencionPasiva, setImagenRedencionPasiva] = useState(null);
  const [imagenRedencionAgresiva, setImagenRedencionAgresiva] = useState(null);
  const [valores, setValores] = useState([]);

  useEffect(() => {
    axios
      .get("http://54.88.52.250/api/v1/valores")
      .then((response) => {
        setValores(response.data);
      })
      .catch((error) => {
        console.error("ERROR AL TRAER LOS VALORES: ", error);
      });

    axios
      .get("http://54.88.52.250/api/v1/casos/pedir")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        // Manejar errores si es necesario
      });
  }, []);

  useEffect(() => {
    if (options) {
      setSelectedOption(options[0]?.id);
    }
  }, [options]);

  useEffect(() => {
    if (selectedOption) {
      (async () => {
        const casoData = await axios.post(
          "http://54.88.52.250/api/v1/caso/elegido",
          {
            id: selectedOption,
          }
        );
        console.log("CASO DATA: ", casoData);
        setCurrentCaso(casoData.data[0]);
        setLoading(false);
      })();
    }
  }, [selectedOption]);

  useEffect(() => {
    if (!currentCaso) return;
    axios
      .get(
        `http://44.205.198.225/imagenes/${currentCaso.imagen_Opcion_Avanzada}`
      )
      .then((response) => {
        setImagenAvanzada(response.data);
      })
      .catch((error) => {
        console.error("ERROR AL TRAER LAS IMAGENES: ", error); // Manejar errores
      });
  }, [currentCaso]);

  const datosCasoCambiar = async (id) => {
    console.log("ID: ", id);
    setSelectedOption(id);
  };

  const cambiarIntro = () => {
    document.getElementsByClassName("opcionesBasicas")[0].style.display =
      "none";
    document.getElementsByClassName("opcionesRedencion")[0].style.display =
      "none";
    const opcionesIntro = document.getElementsByClassName("opcionesIntro")[0];
    const opcionesIntro2 = document.getElementsByClassName("opcionesIntro")[1];
    opcionesIntro.style.gap = ".5rem";
    opcionesIntro.style.display = "flex";
    opcionesIntro.style.flexDirection = "column";
    opcionesIntro.style.width = "500px";
    opcionesIntro.style.border = "4px solid #00ff93";
    opcionesIntro.style.borderRadius = "25px";
    opcionesIntro.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesIntro.style.padding = "2rem";

    opcionesIntro2.style.gap = ".5rem";
    opcionesIntro2.style.display = "flex";
    opcionesIntro2.style.flexDirection = "column";
    opcionesIntro2.style.width = "500px";
    opcionesIntro2.style.border = "4px solid #00ff93";
    opcionesIntro2.style.borderRadius = "25px";
    opcionesIntro2.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    opcionesIntro2.style.padding = "2rem";
  };

  const cambiarBasicos = () => {
    document.getElementsByClassName("opcionesIntro")[0].style.display = "none";
    document.getElementsByClassName("opcionesIntro")[1].style.display = "none";
    document.getElementsByClassName("opcionesRedencion")[0].style.display =
      "none";
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
    document.getElementsByClassName("opcionesIntro")[1].style.display = "none";
    document.getElementsByClassName("opcionesIntro")[0].style.display = "none";
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
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
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
            <select onChange={(event) => datosCasoCambiar(event.target.value)}>
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
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
              <textarea
                onChange={(event) =>
                  setCurrentCaso({
                    ...currentCaso,
                    texto_intro: event.target.value,
                  })
                }
                value={currentCaso.texto_intro}
                name="texto_intro"
                placeholder="Texto Intro"
              />

              <label>Valor</label>
              <select name="id_valor">
                {valores.map((valor) => (
                  <option
                    defaultValue={
                      valor.id == currentCaso.id_valor && currentCaso.id_valor
                    }
                    label={valor.nombre}
                    key={valor.id}
                    value={valor.id}
                  />
                ))}
              </select>
              <label>Nombre</label>
              <input
                onChange={(event) => {
                  setCurrentCaso({
                    ...currentCaso,
                    nombre: event.target.value,
                  });
                }}
                value={currentCaso.nombre}
                type="text"
                name="nombre"
              />
              <button
                type="button"
                className="button-gestion"
                onClick={cambiarBasicos}
              >
                Siguiente
              </button>
            </div>

            <div className="opcionesBasicas" style={{ display: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Opcion Basica</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Opcion_Basica: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Opcion_Basica}
                    type="text"
                    name="texto_Opcion_Basica"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Opcion Avanzada</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Opcion_Avanzada: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Opcion_Avanzada}
                    type="text"
                    name="texto_Opcion_Avanzada"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Opcion Pasiva</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Opcion_Pasiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Opcion_Pasiva}
                    type="text"
                    name="texto_Opcion_Pasiva"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Opcion Agresiva</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Opcion_Agresiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Opcion_Agresiva}
                    type="text"
                    name="texto_Opcion_Agresiva"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Imagen Opcion Basica</label>
                  <input type="file" name="imagenBasica" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Imagen Opcion Avanzada</label>
                  <input type="file" name="imagenAvanzada" />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Imagen Opcion Pasiva</label>
                  <input type="file" name="imagenPasiva" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Imagen Opcion Agresiva</label>
                  <input type="file" name="imagenAgresiva" />
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
                <button
                  type="button"
                  style={{
                    marginTop: "1rem",
                    width: "50%",
                    alignSelf: "center",
                  }}
                  className="button-gestion"
                  onClick={cambiarIntro}
                >
                  Atrás
                </button>
                <button
                  type="button"
                  style={{
                    marginTop: "1rem",
                    width: "50%",
                    alignSelf: "center",
                  }}
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Redencion Pasiva</label>
                  <textarea
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Redencion_Pasiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Redencion_Pasiva}
                    name="texto_Redencion_Pasiva"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Redencion Agresiva</label>
                  <textarea
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Redencion_Agresiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Redencion_Agresiva}
                    name="texto_Redencion_Agresiva"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Redencion Pasiva Mala</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Redencion_Mala_Pasiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Redencion_Mala_Pasiva}
                    type="text"
                    name="texto_Redencion_Mala_Pasiva"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Redencion Pasiva Buena</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Redencion_Buena_Pasiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Redencion_Buena_Pasiva}
                    type="text"
                    name="texto_Redencion_Buena_Pasiva"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Redencion Agresiva Buena</label>
                  <input
                    onChange={(event) => {
                      setCurrentCaso({
                        ...currentCaso,
                        texto_Redencion_Buena_Agresiva: event.target.value,
                      });
                    }}
                    value={currentCaso.texto_Redencion_Buena_Agresiva}
                    type="text"
                    name="texto_Redencion_Buena_Agresiva"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Texto Redencion Agresiva Mala</label>
                  <input
                  onChange={(event) => {
                    setCurrentCaso({
                      ...currentCaso,
                      texto_Redencion_Mala_Agresiva: event.target.value,
                    });
                  }}
                    value={currentCaso.texto_Redencion_Mala_Agresiva}
                    type="text"
                    name="texto_Redencion_Mala_Agresiva"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Imagen Redencion Pasiva</label>
                  <input type="file" name="imagenRedencionPasiva" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "45%",
                  }}
                >
                  <label>Imagen Redencion Agresiva</label>
                  <input type="file" name="imagenRedencionAgresiva" />
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
                <button
                  type="button"
                  className="button-gestion"
                  style={{
                    marginTop: "1rem",
                    width: "50%",
                    alignSelf: "center",
                  }}
                  onClick={cambiarBasicos}
                >
                  Atrás
                </button>
                <button
                  type="submit"
                  className="button-gestion"
                  style={{
                    marginTop: "1rem",
                    width: "50%",
                    alignSelf: "center",
                  }}
                >
                  Crear
                </button>
              </div>
            </div>
          </form>
          <div className="datos"></div>
        </>
      )}
    </div>
  );
};

export default ModificarPage;
