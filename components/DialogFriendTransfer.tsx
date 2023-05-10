import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'

import QrCodeIcon from '@mui/icons-material/QrCode';

export default function DialogFriendTransfer({ onOpen, setOpen }: any) {

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
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Friend Direction</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-qr"
                        endAdornment={<InputAdornment position="end">
                            <QrCodeIcon/>
                        </InputAdornment>}
                        label="qr"
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
