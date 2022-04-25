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
import {Clase} from '../../models/Clase';

const EditarClaseDialog = ({ idClase }: {idClase: string }) => {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = React.useState('');
  
   React.useEffect(() => {
      const fetchData : () => void = async () => {
      const res = await axios.get(`${baseURL}api/v1/clase/${idClase}/`);
      setNombre(res.data.nombre); 
      }
      fetchData();
  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const body = {
      nombre
    }
    await axios.put<Clase>(`${baseURL}api/v1/clase/${idClase}/`, body);
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent:'right'}}>
      <Button variant="outlined" onClick={handleClickOpen} sx={{marginRight:"50px", marginTop: "20px"}}>
        { "Editar" } Clase
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Editar Clase"}</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Titulo"
            type="text"
            fullWidth
            variant="standard"
            value={nombre} 
			      onChange={(e) => setNombre(e.target.value)}
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

export default EditarClaseDialog;