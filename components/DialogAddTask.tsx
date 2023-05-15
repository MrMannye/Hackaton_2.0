import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import React, { useEffect, useMemo } from 'react'

export default function DialogAddTask({onOpen, setOpen}:any) {
    const [title, setTitle] = React.useState<string>("")
    const {publicKey} = useWallet();
    const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
    const [description, setDescription] = React.useState<string>("")
    const [addDisabled, setAddDisabled] = React.useState<boolean>(true);
    
    function convertDateMysql(strDate:string){
        const parts = strDate.split('/');
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        return year+"-"+month.padStart(2, "0")+"-"+day.padStart(2, "0");
    }

    const handleClose = () => {
        axios.post(`https://proactiveweek-superbrandon2018.b4a.run/tasks/addTask`, {
            nombre_task: title,
            descripcion_task: description,
            completed_task: false,
            user_address: base58,
            created_task: convertDateMysql(new Date().toLocaleDateString())
        }).then(res => {
            console.log(res)
            setOpen(false);
        }).catch(err => {
            console.log(err);
        })
    };

    const closeDialog = () => {
        setOpen(false)
    };

    useEffect(() => {
        (title.length !== 0 && description.length !== 0) ? setAddDisabled(false) : setAddDisabled(true);
        console.log(convertDateMysql(new Date().toLocaleDateString()))
    },[title,description])
    return (
        <Dialog open={onOpen} onClose={closeDialog}>
            <DialogTitle className='text-semibold'>!Proactividad!</DialogTitle>
            <DialogContentText className='px-6'>
                Agrega una actividad mas a tu lista
            </DialogContentText>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="title"
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
                    id="description"
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
