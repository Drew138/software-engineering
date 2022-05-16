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
import { Pregunta } from '../../models/Pregunta';

const CrearPreguntaDialog = ({ pregunta, idClase }: { pregunta?: Pregunta, idClase: string }) => {
    const [open, setOpen] = React.useState(false);
    const [respuesta, setRespuesta] = React.useState(pregunta?.respuesta ?? '');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        const body = {
            titulo: (pregunta ? pregunta.titulo : ""),
            clase: idClase,
            respuesta: respuesta,
        }

        await axios.put<Pregunta>(`${baseURL}api/v1/pregunta/${pregunta?.id}/`, body);
        setOpen(false);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ marginRight: "50px", marginTop: "20px" }}>
                {pregunta?.respuesta != "" ? "Editar" : "Crear"} Respuesta
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{pregunta ? pregunta.titulo : ""}</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Respuesta"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
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