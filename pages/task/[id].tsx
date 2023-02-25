import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import { Divider } from '@mui/material';

export default function Task() {
  
    const router = useRouter();
    const idTask = router.query.id;

    return (
    <div className='p-6'>
        <div className='flex justify-between'>
            <ArrowBackIcon className='text-gray-500' onClick={() => router.back()}/>
            <EditIcon className='text-gray-500'/>
        </div>
        <div className='my-6'>
            <h1 className='text-4xl mb-2 font-bold'>[toDoName]</h1>
            <span>[toDoDetails]</span>
        </div>
        <Divider variant="middle" />
        <div className='flex flex-col'>
            <h2>Due</h2>
            <span className='text-2xl mb-2 font-bold'>[toDoName] <span className='text-[#42BEA5]'>{[idTask]}</span></span>
            <button className='py-4 w-80 shadow-xl self-center bg-[#42BEA5] rounded-lg text-white font-semibold mt-5'>Mark As Complete</button>
        </div>
    </div>
  )
}
