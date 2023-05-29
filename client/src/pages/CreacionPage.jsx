import React, { useState } from 'react';
import axios from 'axios';

const CreacionPage = () => {
  const [intros, setIntro] = useState(true);
  const [mostrarBasico, setMostrarBasico] = useState(false);
  const [mostrarRedenciones, setMostrarRedenciones] = useState(false);
  const id_valor='';
  const  nombre='';
  const  texto_intro='';
  const  texto_Opcion_Basica='';
  const  texto_Opcion_Avanzada='';
  const  texto_Opcion_Pasiva='';
  const  texto_Opcion_Agresiva='';
  const  texto_Redencion_Pasiva='';
  const  texto_Redencion_Buena_Pasiva='';
  const  texto_Redencion_Mala_Pasiva='';
  const  texto_Redencion_Agresiva='';
  const  texto_Redencion_Buena_Agresiva='';
  const  texto_Redencion_Mala_Agresiva='';
  const  imagenBasica =null;
  const  imagenAvanzada =null;
  const  imagenAgresiva =null;
  const  imagenPasiva =null;
  const  imagenRedencionPasiva =null;
  const  imagenRedencionAgresiva =null;

  const cambiarIntro = () => {
    document.getElementsByClassName('opcionesBasicas')[0].style='display:none';
    document.getElementsByClassName('opcionesRedencion')[0].style='display:none';
    document.getElementsByClassName('opcionesIntro')[0].style='display:grid';
    id_valor=document.getElementsByName('id_valor')[0].value;
  nombre=document.getElementsByName('nombre')[0].value;
  texto_intro=document.getElementsByName('texto_intro')[0].value;
  };

  const cambiarBasicos = () => {
    document.getElementsByClassName('opcionesBasicas')[0].style='display:grid';
    document.getElementsByClassName('opcionesRedencion')[0].style='display:none';
    document.getElementsByClassName('opcionesIntro')[0].style='display:none';
    imagenBasica =document.getElementsByName('imagenBasica')[0].files[0];
    imagenRedencionAgresiva =document.getElementsByName('imagenRedencionAgresiva')[0].files[0];
    imagenRedencionPasiva =document.getElementsByName('imagenRedencionPasiva')[0].files[0];
    imagenRedencionAgresiva =document.getElementsByName('imagenRedencionAgresiva')[0].files[0];
  };

  const redenciones = () => {
    document.getElementsByClassName('opcionesBasicas')[0].style='display:none';
    document.getElementsByClassName('opcionesRedencion')[0].style='display:grid';
    document.getElementsByClassName('opcionesIntro')[0].style='display:none';
    imagenRedencionPasiva =document.getElementsByName('imagenRedencionPasiva')[0].files[0];
    imagenRedencionAgresiva =document.getElementsByName('imagenRedencionAgresiva')[0].files[0];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('id_valor',id_valor);
    formData.append('nombre',nombre);
    formData.append('texto_intro',texto_intro);
    formData.append('texto_Opcion_Basica',texto_Opcion_Basica);
    formData.append('texto_Opcion_Avanzada',texto_Opcion_Avanzada);
    formData.append('texto_Opcion_Pasiva',texto_Opcion_Pasiva);
    formData.append('texto_Opcion_Agresiva',texto_Opcion_Agresiva);
    formData.append('texto_Redencion_Pasiva',texto_Redencion_Pasiva);
    formData.append('texto_Redencion_Buena_Pasiva',texto_Redencion_Buena_Pasiva);
    formData.append('texto_Redencion_Mala_Pasiva',texto_Redencion_Mala_Pasiva);
    formData.append('texto_Redencion_Agresiva',texto_Redencion_Agresiva);
    formData.append('texto_Redencion_Buena_Agresiva',texto_Redencion_Buena_Agresiva);
    formData.append('texto_Redencion_Mala_Agresiva',texto_Redencion_Mala_Agresiva);
    formData.append('imagenBasica',imagenBasica);
    formData.append('imagenAvanzada',imagenAvanzada);
    formData.append('imagenAgresiva',imagenAgresiva);
    formData.append('imagenPasiva',imagenPasiva);
    formData.append('imagenRedencionPasiva',imagenRedencionPasiva);
    formData.append('imagenRedencionAgresiva',imagenRedencionAgresiva);



    axios
      .post('http://localhost:3001/pruebita', formData)
      .then((response) => {
        console.log(response.data); // Manejar la respuesta del servidor
      })
      .catch((error) => {
        console.error(error); // Manejar errores
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

          <div className='opcionesIntro' style={{ display: 'grid' }}>
            <label>Texto de introducción</label>
            <textarea name="texto_intro" placeholder="Texto Intro"   />
            <label>Valor</label>
            <select name="id_valor" >
              <option value="1">Amistad</option>
              <option value="2">Trabajo en equipo</option>
              <option value="3">Justicia</option>
              <option value="4">Tolerancia</option>
              <option value="5">Bondad</option>
            </select>
            <label>Nombre</label>
            <input type="text"  name='nombre' />
            <button onClick={cambiarBasicos}>Siguiente</button>
          </div>
        
          <div className='opcionesBasicas' style={{display:'none'}}>
            <label>Texto Opcion Basica</label>
            <input type="text" name="texto_Opcion_Basica"   />
            <label>Texto Opcion Avanzada</label>
            <input type="text" name="texto_Opcion_Avanzada"   />
            <label>Texto Opcion Pasiva</label>
            <input type="text" name="texto_Opcion_Pasiva"   />
            <label>Texto Opcion Agresiva</label>
            <input type="text" name="texto_Opcion_Agresiva"   />
            <label>Imagen Opcion Basica</label>
            <input type="file" name="imagenBasica"   />
            <label>Imagen Opcion Avanzada</label>
            <input type="file" name="imagenAvanzada"   />
            <label>Imagen Opcion Pasiva</label>
            <input type="file" name="imagenPasiva"   />
            <label>Imagen Opcion Agresiva</label>
            <input type="file" name="imagenAgresiva"   />
            <button onClick={cambiarIntro}>Atrás</button>
            <button onClick={redenciones}>Siguiente</button>
          </div>

          <div className='opcionesRedencion' style={{display:'none'}}>
            <label>Texto Redencion Pasiva</label>
            <textarea name="texto_Redencion_Pasiva"   />
            <label>Texto Redencion Pasiva Buena</label>
            <input type="text" name="texto_Redencion_Buena_Pasiva"   />
            <label>Texto Redencion Pasiva Mala</label>
            <input type="text" name="texto_Redencion_Mala_Pasiva"   />
            <label>Texto Redencion Agresiva</label>
            <textarea name="texto_Redencion_Agresiva"   />
            <label>Texto Redencion Agresiva Buena</label>
            <input type="text" name="texto_Redencion_Buena_Agresiva"   />
            <label>Texto Redencion Agresiva Mala</label>
            <input type="text" name="texto_Redencion_Mala_Agresiva"   />
            <label>Imagen Redencion Pasiva</label>
            <input type="file" name="imagenRedencionPasiva"   />
            <label>Imagen Redencion Agresiva</label>
            <input type="file" name="imagenRedencionAgresiva"  />
            <button onClick={cambiarBasicos}>Atrás</button>
            <button type='submit'>Crear</button>
          </div>

      </form>
    </div>
  );
};

export default CreacionPage;
