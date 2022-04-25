import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Anuncio } from '../../models/Anuncio'
import CrearAnuncioDialog from '../dialogs/CrearAnuncioDialog';

const AnuncioCard = ({ anuncio, idClase } : { anuncio: Anuncio, idClase: string }) => {
  return (
    <Card sx={{ maxWidth: 1500, maxHeight: 200, m: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { anuncio.titulo }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { anuncio.cuerpo }
        </Typography>
        <CrearAnuncioDialog anuncio={anuncio} idClase={idClase}/>
      </CardContent>
    </Card>
  );
}

export default AnuncioCard;