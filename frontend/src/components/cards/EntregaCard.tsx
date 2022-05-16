import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Entrega } from '../../models/Entrega';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CrearEntregaDialog from '../dialogs/CrearEntregaDialog';
import BorrarDialog  from '../dialogs/BorrarDialog';
import { User } from '../../models/User';

const EntregaCard = ({ entrega, idClase, user }: { entrega: Entrega, idClase: string, user: User | null }) => {
  return (
    <Card sx={{ maxWidth: 1500, maxHeight: 200, m: 3 }}>

      <CardContent>
      {user?.rol === 'Profesor' && <BorrarDialog tipo="entrega" nombre="entrega" id={entrega.id}/>}
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
        {user?.rol === 'Profesor' && <CrearEntregaDialog entrega={entrega} idClase={idClase}/>}
      </CardContent>
    </Card>
  );
}

export default EntregaCard;