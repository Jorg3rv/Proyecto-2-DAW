import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreacionItinerarioPage = () => {
  const [textInput, setTextInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [hiddenInput, setHiddenInput] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get('http://54.88.52.250/api/v1/caso/pedir')
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        // Manejar errores si es necesario
      });
  }, []);

  const handleAdd = () => {
    setHiddenInput(prevHiddenInput => [...prevHiddenInput, selectedOption]);
  };

  const handleSubmit = () => {
    axios
      .post('/v1/itinerario', {
        textInput,
        hiddenInput
      })
      .then(response => {
        // Realizar acciones adicionales si es necesario
      })
      .catch(error => {
        // Manejar errores si es necesario
      });
  };

  const handleShowData = () => {
    console.log("Datos a enviar:");
    console.log("Texto:", textInput);
    console.log("IDs seleccionadas:", hiddenInput);
  };

  return (
    <div>
      <input
        type="text"
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
      />

      <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>

      <button onClick={handleAdd}>Añadir</button>

      {hiddenInput.map((option, index) => (
        <input type="hidden" key={index} value={option} />
      ))}

      <button onClick={handleSubmit}>Enviar</button>

      <button onClick={handleShowData}>Mostrar Datos</button>
    </div>
  );
};

export default CreacionItinerarioPage;
