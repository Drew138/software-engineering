import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import axios from 'axios';
import { baseURL } from '../../config';
import { Entrega } from '../../models/Entrega';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const CrearAnuncioDialog = ({ entrega, idClase }: { entrega?: Entrega, idClase: string }) => {
  const [open, setOpen] = React.useState(false);
  const [titulo, setTitulo] = React.useState(entrega?.titulo ?? '');
  const [cuerpo, setCuerpo] = React.useState(entrega?.cuerpo ?? '');
  const [porcentaje, setPorcentaje] = React.useState(entrega?.porcentaje ?? '');
  const [fechaEntrega, setFechaEntrega] = React.useState<null | Date>(entrega ? new Date(entrega.fecha_entrega) : null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const body = {
      titulo,
      cuerpo,
      porcentaje,
      fecha_entrega: fechaEntrega?.toISOString().split('T')[0],
      clase: idClase
    }
    if (entrega){
      await axios.put<Entrega>(`${baseURL}api/v1/entrega/${entrega?.id}/`, body);
    }
    else {
      await axios.post<Entrega>(`${baseURL}api/v1/entrega/`, body);
    }
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent:'right'}}>
      <Button variant="outlined" onClick={handleClickOpen} sx={{marginRight:"50px", marginTop: "20px"}}>
        { entrega ? "Editar" : "Crear" } Entrega
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{entrega ? "Editar Entrega" : "Crear Entrega"}</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Titulo"
            type="text"
            fullWidth
            variant="standard"
            value={titulo} 
			      onChange={(e) => setTitulo(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descripcion"
            type="text"
            fullWidth
            multiline
            variant="outlined"
            rows={10}
            value={cuerpo} 
			      onChange={(e) => setCuerpo(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Porcentaje"
            type="text"
            fullWidth
            multiline
            variant="outlined"
            rows={1}
            value={porcentaje} 
			      onChange={(e) => setPorcentaje(e.target.value)}
          />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Fecha de Entrega"
            openTo="year"
            views={['year', 'month', 'day']}
            value={fechaEntrega}
            onChange={(newValue: any) => {
              setFechaEntrega(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} />}
          />
        </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CrearAnuncioDialog;