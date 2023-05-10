import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";

const CreacionPage = () => {
  return (
    
    <div>
    <h1>Crea tu propio escenario</h1>

      <label for="valor">Valor:</label>
      <select id="valor" name="valor">
        <option value="1">Amistad</option>
        <option value="2">Justicia</option>
        <option value="3">Trabajo en equipo</option>
        <option value="4">Bondad</option>
        <option value="5">Tolerancia</option>
      </select>

      <br /><br />
      <label for="chat">Texto intro:</label>
<textarea id="chat" name="chat"></textarea>
<div className="datos-primera-pagina">
<div className="textos-primera-pagina">


<label for="escenario1">Texto Opcion Avanzada:</label>
<input type="text" id="escenario1" name="escenario1" />


<label for="escenario1">Texto Opcion Basica:</label>
<input type="text" id="escenario1" name="escenario1" />


<label for="escenario1">Texto Opcion Pasiva:</label>
<input type="text" id="escenario1" name="escenario1" />


<label for="escenario1">Texto Opcion Agresiva:</label>
<input type="text" id="escenario1" name="escenario1" />
</div>
<div className="imagenes-primera-pagina">
      <label for="file1">Imagen Opcion Avanzada:</label>
      <input type="file" id="file1" name="file1" />
      <label for="file2">Imagen Opcion Basica:</label>
      <input type="file" id="file2" name="file2" />
      <label for="file3">Imagen Opcion Pasiva:</label>
      <input type="file" id="file3" name="file3" />
      <label for="file4">Imagen Opcion Agresiva:</label>
      <input type="file" id="file4" name="file4" />
</div>

</div>{/*hasta aqui el div1*/}

<div className="datos-redenciones">
<label for="escenario1">Dialogo Redencion Pasiva :</label>
<textarea id="chat" name="chat"></textarea>

<label for="escenario1">Texto Opcion Redencion Pasiva Buena:</label>
<input type="text" id="escenario1" name="escenario1" />


<label for="escenario1">Texto Opcion Redencion Pasiva Mala:</label>
<input type="text" id="escenario1" name="escenario1" />



<label for="escenario1">Dialogo Agresiva :</label>
<textarea id="chat" name="chat"></textarea>

<label for="escenario1">Texto Opcion Redencion Agresiva Buena:</label>
<input type="text" id="escenario1" name="escenario1" />



<label for="escenario1">Texto Opcion Redencion Agresiva Mala:</label>
<input type="text" id="escenario1" name="escenario1" />
</div>{/*hasta aqui el div2*/}


      <br /><br />


<input type="submit" value="Guardar"/>

      </div>

  );
};

export default CreacionPage;