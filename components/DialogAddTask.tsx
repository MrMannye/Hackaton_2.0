import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

export default function DialogAddTask({onOpen, setOpen}:any) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={onOpen} onClose={handleClose}>
            <DialogTitle className='text-semibold'>!Proactividad!</DialogTitle>
            <DialogContentText className='px-6'>
                Agrega una actividad mas a tu lista
            </DialogContentText>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="name"
                    label="Nombre de la actividad"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    multiline
                    rows={3}
                    id="name"
                    label="Descripcion"
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
