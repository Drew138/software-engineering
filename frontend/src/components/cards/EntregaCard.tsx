import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Entrega } from '../../models/Entrega';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CrearEntregaDialog from '../dialogs/CrearEntregaDialog';


const EntregaCard = ({ entrega, idClase } : { entrega: Entrega, idClase: string }) => {
  return (
    <Card sx={{ maxWidth: 1500, maxHeight: 200, m: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { entrega.titulo }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { entrega.cuerpo }
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={entrega.porcentaje + "%"}/>
          <Chip label={entrega.fecha_entrega}/>
        </Stack>
        <CrearEntregaDialog entrega={entrega} idClase={idClase}/>
      </CardContent>
    </Card>
  );
}

export default EntregaCard;