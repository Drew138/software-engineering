import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Anuncio } from '../../models/Anuncio'

const AnuncioCard = ({ anuncio } : { anuncio: Anuncio }) => {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { anuncio.titulo }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { anuncio.cuerpo }
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AnuncioCard;