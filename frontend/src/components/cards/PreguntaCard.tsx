import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Pregunta } from '../../models/Pregunta';
import CrearPreguntaDialog from '../dialogs/CrearPreguntaDialog';


const PreguntaCard = ({ pregunta, idClase  } : { pregunta: Pregunta, idClase: string  }) => {
  return (
    <Card sx={{ maxWidth: 1500, maxHeight: 200, m: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { pregunta.titulo }
        </Typography>
        <CrearPreguntaDialog pregunta={pregunta} idClase={idClase}/>
        <Divider variant="inset"/>
        <Typography variant="body2" color="text.secondary">
          { pregunta.respuesta }
        </Typography>
        
      </CardContent>
    </Card>
  );
}

export default PreguntaCard;