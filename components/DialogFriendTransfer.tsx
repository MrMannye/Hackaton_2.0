import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

export default function DialogFriendTransfer({onOpen, setOpen}:any) {
    
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
    <Dialog open={onOpen} onClose={handleClose}>
            <DialogTitle className='text-semibold'>Friend Transfer</DialogTitle>
            <DialogContentText className='px-6'>
                En esta seccion puedes configurar a quien le enviaras tus solanas
                si no cumples con tus objetivos
            </DialogContentText>
            <DialogContent>
            
                <TextField
                    margin="dense"
                    id="name"
                    label="Direccion de solana"
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
