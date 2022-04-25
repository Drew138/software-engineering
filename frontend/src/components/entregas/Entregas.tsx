

import * as React from 'react';

import Box from '@mui/material/Box';

import { Entrega } from '../../models/Entrega';
import { useQuery } from 'react-query';
import { baseURL } from '../../config';
import axios from 'axios';
import EntregaCard from '../cards/EntregaCard';

const Entregas = ({ idClase } : { idClase: string }) => {

    const fetchEntregas = async () => {
        const res = await axios.get<Entrega[]>(`${baseURL}api/v1/entrega/`, { params: { clase: idClase }});
        return res.data;
    }

  const { data } = useQuery('entregas', fetchEntregas);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {data?.map(entrega => (
                <EntregaCard entrega={entrega} key={entrega.id} idClase={idClase} />
            ))}
        </Box>
    )
}

export default Entregas;