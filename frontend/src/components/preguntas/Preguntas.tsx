
import * as React from 'react';

import Box from '@mui/material/Box';

import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from '../../config';
import { Pregunta } from '../../models/Pregunta';
import PreguntaCard from '../cards/PreguntaCard';

const Preguntas = ({idClase} : {idClase: string}) => {

    const fetchPreguntas = async () => {
        const res = await axios.get<Pregunta[]>(`${baseURL}api/v1/pregunta/`, { params: { clase: idClase }});
        return res.data;
    }

    const { data } = useQuery('preguntas', fetchPreguntas);
    
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', m: 3 }}>
        {
            data?.map(pregunta => (
            <PreguntaCard pregunta={pregunta} key={pregunta.id} idClase={idClase} />
            ))
        }
        </Box>
    )
}

export default Preguntas;