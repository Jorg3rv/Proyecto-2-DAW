import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";

const CreacionPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formValues, setFormValues] = useState({
    valor: "",
    chat: "",
    escenario1: "",
    file1: "",
    escenario2: "",
    file2: "",
    escenario3: "",
    file3: "",
    escenario4: "",
    file4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSection(currentSection + 1);
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div>
      <h1>Crea tu propio escenario</h1>

      {currentSection === 0 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="valor">Valor:</label>
          <select id="valor" name="valor" value={formValues.valor} onChange={handleChange}>
            <option value="1">Amistad</option>
            <option value="2">Justicia</option>
            <option value="3">Trabajo en equipo</option>
            <option value="4">Bondad</option>
            <option value="5">Tolerancia</option>
          </select>

          <br /><br />

          <button type="submit">Siguiente</button>
        </form>
      )}

      {currentSection === 1 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="chat">Texto intro:</label>
          <textarea id="chat" name="chat" value={formValues.chat} onChange={handleChange}></textarea>
          <div className="datos-primera-pagina">
            <div className="textos-primera-pagina">
              <label htmlFor="escenario1">Texto Opcion Avanzada:</label>
              <input type="text" id="escenario1" name="escenario1" value={formValues.escenario1} onChange={handleChange} />
            </div>
            <div className="imagenes-primera-pagina">
              <label htmlFor="file1">Imagen Opcion Avanzada:</label>
              <input type="file" id="file1" name="file1" value={formValues.file1} onChange={handleChange} />
            </div>
          </div>

          <button type="submit">Siguiente</button>
          {currentSection > 0 && <button onClick={handleBack}>Atrás</button>}
        </form>
      )}

      {currentSection === 2 && (
        <form onSubmit={handleSubmit}>
          <div className="datos-primera-pagina">
            <div className="textos-primera-pagina">
              <label htmlFor="escenario2">Texto Opcion Basica:</label>
              <input type="text" id="escenario2" name="escenario2" value={formValues.escenario2} onChange={handleChange} />
            </div>
            <div className="imagenes-primera-pagina">
              <label htmlFor="file2">Imagen Opcion Basica:</label>
              <input type="file" id="file2" name="file2" value={formValues.file2} onChange={handleChange} />
            </div>
          </div>

          <button type="submit">Siguiente</button>
          <button onClick={handleBack}>Atrás</button>
        </form>
      )}

      {currentSection === 3 && (
        <form onSubmit={handleSubmit}>
          <div className="datos-primera-pagina">
            <div className="textos-primera-pagina">
              <label htmlFor="escenario3">Texto Opcion Pasiva:</label>
              <input type="text" id="escenario3" name="escenario3" value={formValues.escenario3} onChange={handleChange} />
            </div>
            <div className="imagenes-primera-pagina">
              <label htmlFor="file3">Imagen Opcion Pasiva:</label>
              <input type="file" id="file3" name="file3" value={formValues.file3} onChange={handleChange} />
            </div>
          </div>

          <button type="submit">Siguiente</button>
          <button onClick={handleBack}>Atrás</button>
        </form>
      )}

      {currentSection === 4 && (
        <form onSubmit={handleSubmit}>
          <div className="datos-primera-pagina">
            <div className="textos-primera-pagina">
              <label htmlFor="escenario4">Texto Opcion Agresiva:</label>
              <input type="text" id="escenario4" name="escenario4" value={formValues.escenario4} onChange={handleChange} />
            </div>
            <div className="imagenes-primera-pagina">
              <label htmlFor="file4">Imagen Opcion Agresiva:</label>
              <input type="file" id="file4" name="file4" value={formValues.file4} onChange={handleChange} />
            </div>
          </div>

          <button type="submit">Siguiente</button>
          <button onClick={handleBack}>Atrás</button>
        </form>
      )}

      {/* Agrega más secciones según tus necesidades */}
    </div>
  );
};

export default CreacionPage;

