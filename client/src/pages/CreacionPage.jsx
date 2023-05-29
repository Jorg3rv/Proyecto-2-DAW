import React, { useState } from 'react';
import axios from 'axios';

const CreacionPage = () => {
  let id_valor='';
  let  nombre='';
  let  texto_intro='';
  let  texto_Opcion_Basica='';
  let  texto_Opcion_Avanzada='';
  let  texto_Opcion_Pasiva='';
  let  texto_Opcion_Agresiva='';
  let  texto_Redencion_Pasiva='';
  let  texto_Redencion_Buena_Pasiva='';
  let  texto_Redencion_Mala_Pasiva='';
  let  texto_Redencion_Agresiva='';
  let  texto_Redencion_Buena_Agresiva='';
  let  texto_Redencion_Mala_Agresiva='';
  let  imagenBasica =null;
  let  imagenAvanzada =null;
  let  imagenAgresiva =null;
  let  imagenPasiva =null;
  let  imagenRedencionPasiva =null;
  let  imagenRedencionAgresiva =null;

  const cambiarIntro = () => {
    document.getElementsByClassName('opcionesBasicas')[0].style='display:none';
    document.getElementsByClassName('opcionesRedencion')[0].style='display:none';
    document.getElementsByClassName('opcionesIntro')[0].style='display:grid';

  };

  const cambiarBasicos = () => {
    document.getElementsByClassName('opcionesBasicas')[0].style='display:grid';
    document.getElementsByClassName('opcionesRedencion')[0].style='display:none';
    document.getElementsByClassName('opcionesIntro')[0].style='display:none';
    id_valor=document.getElementsByName('id_valor')[0].value;
  nombre=document.getElementsByName('nombre')[0].value;
  texto_intro=document.getElementsByName('texto_intro')[0].value;
  };

  const redenciones = () => {
    document.getElementsByClassName('opcionesBasicas')[0].style='display:none';
    document.getElementsByClassName('opcionesRedencion')[0].style='display:grid';
    document.getElementsByClassName('opcionesIntro')[0].style='display:none';
    texto_Opcion_Basica=document.getElementsByName('texto_Opcion_Basica')[0].value;
    texto_Opcion_Avanzada=document.getElementsByName('texto_Opcion_Avanzada')[0].value;
    texto_Opcion_Pasiva=document.getElementsByName('texto_Opcion_Pasiva')[0].value;
    texto_Opcion_Agresiva=document.getElementsByName('texto_Opcion_Agresiva')[0].value;
    texto_Redencion_Pasiva=document.getElementsByName('texto_Redencion_Pasiva')[0].value;
    imagenBasica =document.getElementsByName('imagenBasica')[0].files[0];
    imagenAvanzada =document.getElementsByName('imagenAvanzada')[0].files[0];
    imagenAgresiva =document.getElementsByName('imagenAgresiva')[0].files[0];
    imagenPasiva =document.getElementsByName('imagenPasiva')[0].files[0];
  };

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    texto_Redencion_Buena_Pasiva=document.getElementsByName('texto_Redencion_Buena_Pasiva')[0].value;
    texto_Redencion_Mala_Pasiva=document.getElementsByName('texto_Redencion_Mala_Pasiva')[0].value;
    texto_Redencion_Agresiva=document.getElementsByName('texto_Redencion_Agresiva')[0].value;
    texto_Redencion_Buena_Agresiva=document.getElementsByName('texto_Redencion_Buena_Agresiva')[0].value;
    texto_Redencion_Mala_Agresiva=document.getElementsByName('texto_Redencion_Mala_Agresiva')[0].value;
    imagenRedencionPasiva =document.getElementsByName('imagenRedencionPasiva')[0].files[0];
    imagenRedencionAgresiva =document.getElementsByName('imagenRedencionAgresiva')[0].files[0];
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
    formData.append('imagen',imagenBasica);
    formData.append('imagen',imagenAvanzada);
    formData.append('imagen',imagenAgresiva);
    formData.append('imagen',imagenPasiva);
    formData.append('imagen',imagenRedencionPasiva);
    formData.append('imagen',imagenRedencionAgresiva);


   await axios 
      .post('http://54.88.52.250/api/v1/caso/insertar', formData,config)
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
      <div className='datos'>
     

      </div>

    </div>
  );
};

export default CreacionPage;
