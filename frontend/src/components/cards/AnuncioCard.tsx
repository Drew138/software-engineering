import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Anuncio } from '../../models/Anuncio'
import CrearAnuncioDialog from '../dialogs/CrearAnuncioDialog';
import BorrarDialog  from '../dialogs/BorrarDialog';
import {User} from '../../models/User';

const AnuncioCard = ({ anuncio, idClase, user } : { anuncio: Anuncio, idClase: string, user: User | null }) => {
  return (
    <Card sx={{ maxWidth: 1500, maxHeight: 200, m: 3 }}>
      
      <CardContent>
      {user?.rol === 'Profesor' && <BorrarDialog tipo="anuncio" nombre="anuncio" id={anuncio.id}/>}
        <Typography gutterBottom variant="h5" component="div">
          { anuncio.titulo }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { anuncio.cuerpo }
        </Typography>
        {user?.rol === 'Profesor' && <CrearAnuncioDialog anuncio={anuncio} idClase={idClase}/>}
      </CardContent>
      
    </Card>
  );
}

export default AnuncioCard;