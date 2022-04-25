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
import {Pregunta} from '../../models/Pregunta';

const CrearPreguntaDialog = ({ pregunta, idClase }: { pregunta?: Pregunta, idClase: string }) => {
  const [open, setOpen] = React.useState(false);
  const [titulo, setTitulo] = React.useState(pregunta?.titulo ?? '');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const body = {
      titulo,
      clase: idClase
    }
    if (pregunta){
      await axios.put<Pregunta>(`${baseURL}api/v1/pregunta/${pregunta?.id}/`, body);
    }
    else {  
      await axios.post<Pregunta>(`${baseURL}api/v1/pregunta/`, body);
    }
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent:'right'}}>
      <Button variant="outlined" onClick={handleClickOpen} sx={{marginRight:"50px", marginTop: "20px"}}>
        { pregunta ? "Editar" : "Crear" } Pregunta
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{pregunta ? "Editar Pregunta" : "Crear Pregunta"}</DialogTitle>
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

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CrearPreguntaDialog;