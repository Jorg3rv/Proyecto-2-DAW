import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ItinerarioContext = createContext();

export const ItinerarioContextProvider = ({ children }) => {
    const [caso, setCaso] = useState(null);
    const [itinerario, setItinerario] = useState(null);
    const [currentCaso, setCurrentCaso] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('GETTING ITINERARIO');
        const getItinerario = async () => {
            let { data } = await axios.get("/api/v1/itinerario/last");
            setItinerario(data.data);
        };
        getItinerario();
    }, []);

    useEffect(() => {
        if (itinerario) {
            const getCaso = async () => {
                console.log(itinerario);
                console.log('CURRENT CASO: ', currentCaso)
                let { data } = await axios.get(`/api/v1/caso/${itinerario.idCasos[currentCaso]}?itinerario=${itinerario.idItinerario}`);

                console.log(data.data[0]);
                setCaso(data.data[0]);
                setLoading(false);
            };
            getCaso();
        }
    }, [itinerario, currentCaso]);

    const data = {
        caso,
        setCaso,
        currentCaso,
        setCurrentCaso,
        itinerario,
        setItinerario
    }

    return loading ? (<div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
    </div>) : (
        <ItinerarioContext.Provider value={data}>
            {children}
        </ItinerarioContext.Provider>
    )
};