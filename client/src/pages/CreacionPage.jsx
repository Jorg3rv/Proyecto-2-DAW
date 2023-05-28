import React, { useState } from 'react';
import axios from 'axios';

const CreacionPage = () => {
  const [intros, setIntro] = useState(true);
  const [mostrarBasico, setMostrarBasico] = useState(false);
  const [mostrarRedenciones, setMostrarRedenciones] = useState(false);
  const [formData, setFormData] = useState(new FormData());

  const cambiarIntro = () => {
    setMostrarBasico(false);
    setIntro(true);
  };

  const cambiarBasicos = () => {
    setIntro(false);
    setMostrarBasico(true);
    setMostrarRedenciones(false);
  };

  const redenciones = () => {
    setMostrarRedenciones(true);
    setMostrarBasico(false);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    const updatedFormData = new FormData(formData);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        updatedFormData.append(name, files[i]);
      }
    } else {
      updatedFormData.set(name, value);
    }
    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://54.54.54.54', formData)
      .then(response => {
        console.log(response.data); // Manejar la respuesta del servidor
      })
      .catch(error => {
        console.error(error); // Manejar errores
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {intros && !mostrarBasico && !mostrarRedenciones ? (
          <div className='opcionesIntro'>
            <label>Texto de introdución</label><textarea name="texto" placeholder="Texto Intro"  />
            <label>Valor</label><select name="Valor" >
              <option value="1">Amistad</option>
              <option value="2">Trabajo en equipo</option>
              <option value="3">Justicia</option>
              <option value="4">Tolerancia</option>
              <option value="5">Bondad</option>
            </select>
            <button onClick={cambiarBasicos}>Siguiente</button>
          </div>
        ) : !intros && mostrarBasico && !mostrarRedenciones ? (
          <div className='opcionesBasicas'>
            <label>Texto Opcion Basica</label><input type="text" name="campo1"   />
            <label>Texto Opcion Avanzada</label><input type="text" name="campo2"   />
            <label>Texto Opcion Pasiva</label> <input type="text" name="campo3"  />
            <label>Texto Opcion Agresiva</label><input type="text" name="campo4"   />
            <label>Imagen Opcion Basica</label><input type="file" name="archivo1"  />
            <label>Imagen Opcion Avanzada</label><input type="file" name="archivo2"  />
            <label>Imagen Opcion Pasiva</label><input type="file" name="archivo1"  />
            <label>Imagen Opcion Agresiva</label><input type="file" name="archivo2"  />
            <button onClick={cambiarIntro}>Atrás</button>
            <button onClick={redenciones}>Siguiente</button>
          </div>
        ) : mostrarRedenciones ? (
          <div className='opcionesRedencion'>
            <label>Texto Redencion Pasiva</label><textarea name="otroCampo"   />
            <label>Texto Redencion Pasiva Buena</label><input type="text" name="masCampos"   />
            <label>Texto Redencion Pasiva Mala</label><input type="text" name="otroCampo2"   />
            <label>Texto Redencion Agresiva</label><textarea name="otroCampo"   />
            <label>Texto Redencion Agresiva Buena</label><input type="text" name="masCampos"   />
            <label>Texto Redencion Agresiva Mala</label><input type="text" name="otroCampo2"   />
            <label>Imagen Redencion Pasiva</label><input type="file" name="otroArchivo"  />
            <label>Imagen Redencion Agresiva</label><input type="file" name="masArchivos"  />
            <button onClick={cambiarBasicos}>Atrás</button>
            <button type='submit'>Crear</button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default CreacionPage;
