import React, { useEffect, useMemo, useState } from 'react'
import NavBar from '@/components/NavBar'
import { Fab, Skeleton } from '@mui/material'
import Image from "next/image"

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import InterestBar from '@/components/InterestBar';
import Transition from '@/components/Transition';
import AnimateTitle from '@/components/AnimateTitle';

import { useWallet } from "@solana/wallet-adapter-react";
import DialogAddTask from '@/components/DialogAddTask';
import axios from 'axios';

interface Task {
  id: number
  nombre_task: string,
  descripcion_task: string,
  completed_task: boolean,
  user_address: string,
  created_task: Date
}

function Mytaks() {
  const { connected, publicKey } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Task[]>([]);
  const [changue, setChangue] = useState(false)
  const router = useRouter();
  const colorsBackground = ["from-cyan-300 to-blue-300", "from-indigo-300 to-pink-300", "from-indigo-300 from-cyan-300", "from-blue-400 to-orange-200", "from-purple-400 to-yellow-200", "from-cyan-400 to-blue-400", "from-indigo-400 to-pink-300", "from-indigo-400 from-cyan-400", "from-blue-400 to-orange-200", "from-rose-300 to-yellow-200"]
  const random = useMemo(() => parseInt((Math.random() * 10).toFixed(0)),[open]);

  useEffect(() => {
    if (!connected) router.push("/")
  }, [connected])

  useEffect(() => {
    fetch(`https://proactiveweek-superbrandon2018.b4a.run/tasks/mytasks/${base58}`)
      .then(response => response.json())
      .then(data => {
        setTasks(data.body)
        setloading(true);
      }).catch(e => {
        setTasks([{ id: 1, nombre_task: "Prueba", descripcion_task: "Prueba para el funcionamiento de la pagina", completed_task: false, user_address: "dwadwa", created_task: new Date() }])
      })
  }, [open,changue])

  const selectTask = (task: Task): any => {
    if (!selected.includes(task)) { setSelected([...selected, task]) }
    else setSelected(selected.filter((element => element !== task)))
  }

  const isSelected = (task: Task): boolean => {
    if (selected.includes(task)) { return true }
    else return false
  }

  const selectColor = (): string => {
    const color = colorsBackground[random];
    return color === undefined ? "from-rose-300 to-lime-300" : color
  }

  const completeTask = () => {
    axios.post(`https://proactiveweek-superbrandon2018.b4a.run/tasks/completeTask`,{
      id_task: selected[0].id,
      completed_task: 1
    }).then(res => {
        console.log(res)
        setChangue(!changue)
        setSelected([])
      }).catch(e => {
        console.log(e)
      })
  }
  console.log(selected)
  return (
    <div className='w-screen'>
      <Transition />
      <h1 className='text-4xl p-4 py-5 text-white font-bold bg-[#FC7823]'>
        <AnimateTitle text='My Tasks' className='' />
      </h1>
      <div className='p-3'>
        <main className='flex w-full flex-col items-start mb-24 space-y-4'>
          {loading ?
            (tasks?.map((task, index) => {
              return (
                <div key={task?.id} className={`m-0 p-0 w-full ${selectColor()}`}>
                  <div onClick={() => selectTask(task)} className={`p-4 bg-gradient-to-r ${isSelected(task) && "opacity-50"} shadow-xl w-full border rounded-xl text-black`}>
                    <div className='flex justify-between'>
                      <h2 className='font-bold text-xl'> {task?.nombre_task}</h2>
                      {
                        new Date().toLocaleDateString() === new Date(task?.created_task).toLocaleDateString() &&
                        <Image src="/icon.png" alt="Evento Hoy" height={20} width={50} className='-mb-2' />
                      }
                    </div>
                    <div className=''>
                      <h5>{new Date(task?.created_task).toLocaleDateString('es-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</h5>
                      <span className='text-sm '>{task.descripcion_task}</span>
                      <InterestBar id={task?.id} />
                    </div>
                  </div>
                </div>
              )
            })) : (
              [1, 2, 3, 4, 5, 6, 7].map(task => {
                return (
                  <Skeleton key={task} variant="rectangular" className='w-full my-3' height={80} />
                )
              })
            )
          }
        </main>
      </div>
      <div className='fixed right-6 bottom-28'>
        <Fab className='bg-[#FC7823]' size='large' onClick={() => setOpen(true)}>
          <AddIcon className='text-white' />
        </Fab>
      </div>
      {selected.length !== 0 && 
        <div className='fixed right-6 bottom-48'>
          <Fab className='bg-[#FC7823]' size='large' onClick={() => completeTask()}>
            <DeleteIcon className='text-white' />
          </Fab>
        </div>
      }
      <DialogAddTask onOpen={open} setOpen={setOpen} />
      <NavBar />
    </div>
  )
}

export default Mytaks