import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import { Fab } from '@mui/material'
import Link from 'next/link';

import AddIcon from '@mui/icons-material/Add';

interface Tasks {
  friend_publickey: string,
  task_date: Date,
  task_desc: string,
  task_name: string,
  task_state: number,
  user_publickey: string,
}

function Mytaks() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  useEffect(() => {
    fetch("http://localhost:8080/tasks/DULTXjP6emJocoEvoM2iZoE2nS6t75F95db6NBo52Sy")
      .then(response => response.json())
      .then(data => setTasks(data));
    
  },[])
  return (
    <div className='h-screen relative w-screen'>
      <h1 className=' text-4xl p-4 py-5 text-white font-bold bg-[#FC7823]'>MyTasks</h1>
      <div className='p-3'>
        <h2>Schedule tasks</h2>
        {tasks.map((task, index) => {
          return (
            <Link key={index} href={`/task/${task}`}>
              <div className="flex items-center justify-between p-4 border mb-3 shadow-xl">
                <div className='flex flex-col items-start'>
                  <span className='text-2xl font-bold'>{task?.task_name}</span>
                  <span>{task?.task_desc}</span>
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
        <Fab className='bg-[#FC7823]' size='large'>
          <AddIcon className='text-white' />
        </Fab>
      </div>
      <NavBar />
    </div>
  )
}

export default Mytaks