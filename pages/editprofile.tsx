import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import { Divider } from '@mui/material';

function Editprofile() {

    const router = useRouter();

    return (
        <div className='p-6'>
        <div className='flex justify-between'>
            <ArrowBackIcon className='text-gray-500' onClick={() => router.back()}/>
        </div>
        <div className='my-6'>
            <h1 className='text-4xl mb-2 font-bold'>[toDoName]</h1>
            <span>[toDoDetails]</span>
        </div>
        <Divider variant="middle" />
        <div className='flex flex-col'>
            <h2>Due</h2>
            <span className='text-2xl mb-2 font-bold'>[toDoName] <span className='text-[#42BEA5]'>{}</span></span>
            <button className='py-4 w-80 shadow-xl self-center bg-[#42BEA5] rounded-lg text-white font-semibold mt-5'>Mark As Complete</button>
        </div>
    </div>
        
    )
}

export default Editprofile