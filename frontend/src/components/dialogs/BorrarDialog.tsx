import * as React from "react";
import { baseURL } from "../../config";
import axios from "axios";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';


export async function Delete(name: string, id: number) {
    await axios.delete(`${baseURL}api/v1/${name}/${id}/`);
}

interface Props {
    tipo: string;
    nombre: string;
    id: number;
}

export default function BorrarDialog({ tipo, nombre, id }: Props) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        await Delete(nombre, id);
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right', fontSize: 40 } } >
                {/* <Button variant="outlined" onClick={handleClickOpen} sx={{ marginRight: "50px", marginTop: "20px" }}>
                    {`Borrar ${tipo}`}
                </Button> */}
                <DeleteIcon onClick={handleClickOpen} sx={{ "&:hover": { color: "red" }, }}></DeleteIcon>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{`Quieres borrar este ${tipo}?`}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleSubmit}>Borrar</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>);

}