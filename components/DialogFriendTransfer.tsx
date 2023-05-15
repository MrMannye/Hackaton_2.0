import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import QrCodeIcon from '@mui/icons-material/QrCode';
import axios from 'axios';

export default function DialogFriendTransfer({ onOpen, setOpen, myaddress }: any) {

    const [friendAddress, setFriendAddress] = useState<string>("")
    const handleClose = () => {
        setOpen(false);
    };
    const addFriendTransfer = () => {
        setOpen(false);
    };

    useEffect(() => {
      axios.get(`https://proactiveweek-superbrandon2018.b4a.run/users/${myaddress}`)
      .then(res => {
        console.log(res.data.body)    
        setFriendAddress(res.data.body[0].friend_transfer)
    })
      .catch(e => console.log(e))
    }, [])
    

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
                        onChange={(e) => setFriendAddress(e.target.value)}
                        value={friendAddress}
                        endAdornment={<InputAdornment position="end">
                            <QrCodeIcon/>
                        </InputAdornment>}
                        label="qr"
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={addFriendTransfer}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
