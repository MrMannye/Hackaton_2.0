import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useRouter } from 'next/router';
import { Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

function Editprofile() {

    const router = useRouter();
    const saveChangues = () => { }

    return (
        <div className='p-6 shadow-xl'>
            <div className='flex items-center space-x-4'>
                <ArrowBackIcon className='text-gray-500' onClick={() => router.back()} />
                <span className='text-3xl font-bold'>Edit Profile</span>
            </div>
            <div className='my-6'>
                <h1 className='text-lg mb-2'>Update Account Information</h1>
            </div>
            <Divider variant="middle" />
            <div className='flex flex-col'>
                <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-correo">Full Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-correo"
                        className='text-black'
                        type="text"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <PersonIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Full Name"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Email Address</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        className='text-black'
                        startAdornment={
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <EmailOutlinedIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Email Address"
                    />
                </FormControl>
                <button onClick={() => saveChangues} className='bg-[#42BEA5] mt-2 shadow-lg font-bold py-3 w-56 self-center text-white rounded-lg'>
                    Save Changes
                </button>
            </div>

        </div>

    )
}

export default Editprofile