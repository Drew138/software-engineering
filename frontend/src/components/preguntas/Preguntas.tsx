
import * as React from 'react';

import Box from '@mui/material/Box';

import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from '../../config';
import { Pregunta } from '../../models/Pregunta';
import PreguntaCard from '../cards/PreguntaCard';
import { User } from '../../models/User';

const Preguntas = ({idClase, user} : {idClase: string, user: User | null }) => {

    const fetchPreguntas = async () => {
        const res = await axios.get<Pregunta[]>(`${baseURL}api/v1/pregunta/`, { params: { clase: idClase }});
        return res.data;
    }

    const { data } = useQuery('preguntas', fetchPreguntas);
    
    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', m: 3 }}>
        {
            data?.map(pregunta => (
            <PreguntaCard pregunta={pregunta} key={pregunta.id} idClase={idClase} user={user}/>
            ))
        }
        </Box>
    )
}

export default Preguntas;