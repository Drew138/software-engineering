import * as React from 'react';

import Box from '@mui/material/Box';

import { Entrega } from '../../models/Entrega';
import { User } from '../../models/User';
import { useQuery } from 'react-query';
import { baseURL } from '../../config';
import axios from 'axios';
import EntregaCard from '../cards/EntregaCard';
import Button from '@mui/material/Button';


const Entregas = ({idClase, user} : {idClase: string, user: User | null }) => {
    const [isSubscribed, setIsSubscribed] = React.useState(false); // TODO: Check if user is already subscribed
    const fetchEntregas = async () => {
        const res = await axios.get<Entrega[]>(`${baseURL}api/v1/entrega/`, { params: { clase: idClase } });
        return res.data;
    }

    const { data } = useQuery('entregas', fetchEntregas);

    const subscribe = async () => {
        const userId = 1;
        const res = await axios.get<User>(`${baseURL}api/v1/user/${userId}/`);
        const user = { ...res.data };
        let new_clases = res.data.clases_suscritas ?? [];
        
        if (isSubscribed) new_clases = new_clases.filter((el: number) => el !== Number(idClase));
        else (new_clases).push(Number(idClase));
        
        user.clases_suscritas = new_clases;
        user.clases = [1];
        const res2 = await axios.patch<User>(`${baseURL}api/v1/user/${userId}/`, user);
        setIsSubscribed(!isSubscribed);
    }
    
    return (
        <>
            <Button variant="outlined" onClick={subscribe} sx={{ marginRight: "50px", marginTop: "20px" }}>
                {isSubscribed ? "Suscrito" : "No Suscrito"}
            </Button>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {data?.map(entrega => (
                    <EntregaCard entrega={entrega} key={entrega.id} idClase={idClase} user={user}/>
                ))}
            </Box>
        </>
    )
}

export default Entregas;