import React from 'react'
import NavBar from '@/components/NavBar'
import { Fab } from '@mui/material'
import Link from 'next/link';

import AddIcon from '@mui/icons-material/Add';

function Mytaks() {
  return (
    <div className='h-screen relative w-screen'>
      <h1 className=' text-4xl p-4 py-5 text-white font-bold bg-[#42BEA5]'>MyTasks</h1>
      <div className='p-3'>
        <h2>Schedule tasks</h2>
        {[1, 2, 3, 4, 5].map(task => {
          return (
            <Link key={task} href={`/task/${task}`}>
              <div className="flex items-center justify-between p-4 border mb-3 shadow-xl">
                <div className='flex flex-col items-start'>
                  <span className='text-2xl font-bold'>[toDoName]</span>
                  <span>[blabla bla]</span>
                </div>
                <div>
                  <input type="checkbox" className='custom-checkbox custom-control-label' />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className='absolute right-6 bottom-28'>
        <Fab className='bg-[#42BEA5]' aria-label="add" size='large'>
          <AddIcon className='text-white' />
        </Fab>
      </div>
      <NavBar />
    </div>
  )
}

export default Mytaks