import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
    const [contraseña, setContraseña] = useState(false);
    const handleClickShowPassword = () => {
        setContraseña(!contraseña);
    }

    const signIn = () => {

    }

    return (
        <div className="flex items-center justify-center flex-col mt-32">
            <Image src={"/logo-light.svg"} className="mb-8" width={140} height={140} alt="Image Main" />
            <div className=' flex flex-col items-center h-screen'>
                <div className='flex flex-col items-center mb-8 bg-transparent'>
                    <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-correo">Correo</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-correo"
                            className='text-black'
                            type="text"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        <LockOutlinedIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Correo"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            className='text-black'
                            type={contraseña ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {contraseña ? <VisibilityOff className='' /> : <Visibility className='' />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <button onClick={() => signIn} className='bg-[#1A1F24] font-bold py-3 px-20 text-white rounded-lg'>
                    Login
                </button>
                <span className='mt-10 bg-transparent'>Dont have an account yet? <Link className='font-bold bg-transparent' href={"/register"}>Register</Link></span>
            </div>
        </div>
    )
}

export default Login
