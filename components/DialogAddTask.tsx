import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useEffect } from 'react'

export default function DialogAddTask({onOpen, setOpen}:any) {
    const [title, setTitle] = React.useState<string>("")
    const [description, setDescription] = React.useState<string>("")
    const [addDisabled, setAddDisabled] = React.useState<boolean>(true);

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        (title.length !== 0 && description.length !== 0) ? setAddDisabled(false) : setAddDisabled(true);
        
    },[title,description])
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
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <TextField
                    margin="dense"
                    multiline
                    rows={3}
                    id="name"
                    label="Descripcion"
                    fullWidth
                    variant="outlined"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </DialogContent>
            <DialogActions>
                <Button disabled={addDisabled} onClick={handleClose}>Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
