import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Pregunta } from '../../models/Pregunta';
import CrearPreguntaDialog from '../dialogs/CrearPreguntaDialog';
import BorrarDialog from '../dialogs/BorrarDialog';
import CrearRespuestaDialog from '../dialogs/CrearRespuestaDialog';
import { User } from '../../models/User';

const PreguntaCard = ({ pregunta, idClase, user }: { pregunta: Pregunta, idClase: string, user: User | null }) => {
  
  return (
    <Card sx={{ maxWidth: 1500, maxHeight: 400, m: 3 }}>
      <CardContent>
        {user?.rol === 'Estudiante' && <BorrarDialog tipo="pregunta" nombre="pregunta" id={pregunta.id} />}
        <Typography gutterBottom variant="h5" component="div">
          {pregunta.titulo}
        </Typography>

        {user?.rol === 'Estudiante' && <CrearPreguntaDialog pregunta={pregunta} idClase={idClase} />}
        <Divider variant="inset" />


        <Typography variant="body2" color="text.secondary">
          {pregunta.respuesta}
        </Typography>
        { user?.rol === 'Profesor' && <CrearRespuestaDialog pregunta={pregunta} idClase={idClase} /> }
      </CardContent>
    </Card>
  );
}

export default PreguntaCard;