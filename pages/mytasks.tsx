import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import { Fab, Skeleton } from '@mui/material'
import Link from 'next/link';
import Image from "next/image"

import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useMirrorWorld } from '@/hooks/useMirrorWorld';
import { useRouter } from 'next/router';
import InterestBar from '@/components/InterestBar';
import Transition from '@/components/Transition';
import AnimateTitle from '@/components/AnimateTitle';

interface Event {
  Id: number,
  name_evento: string,
  organizador: string,
  descripcion_evento: string,
  fecha_evento: Date,
}

function Mytaks() {
  const [tasks, setTasks] = useState<Event[]>([])
  const [loading, setloading] = useState(false);
  const user_publickey = useSelector((state: RootState) => state.user?.wallet?.sol_address);
  const router = useRouter();
  const colorsBackground = ["from-cyan-300 to-blue-300", "from-indigo-300 to-pink-300", "from-indigo-300 from-cyan-300", "from-blue-400 to-orange-200", "from-purple-400 to-yellow-200", "from-cyan-400 to-blue-400", "from-indigo-400 to-pink-300", "from-indigo-400 from-cyan-400", "from-blue-400 to-orange-200", "from-rose-300 to-yellow-200"]


  useEffect(() => {
    fetch("https://proactiveweek-superbrandon2018.b4a.run/events")
      .then(response => response.json())
      .then(data => {
        setTasks(data.body)
        setloading(true);
      });
  }, [])


  const selectColor = (): string => {
    let random: number = parseInt((Math.random() * 10).toFixed(0));
    let color: string = colorsBackground[random];
    return color === undefined ? "from-rose-300 to-lime-300" : color
  }

  return (
    <div className='w-screen'>
      <Transition/>
      <h1 className='text-4xl p-4 py-5 text-white font-bold bg-[#FC7823]'>
        <AnimateTitle text='My Tasks' className=''/>
      </h1>
      <div className='p-3'>
        <main className='flex w-full flex-col items-start mb-24 space-y-4'>
          {loading ?
            (tasks.map((task, index) => {
              return (
                <Link key={task?.Id} href={`/task/${task?.Id}`} className='w-full'>
                  <div className={`p-4 bg-gradient-to-r ${selectColor()} bg-o shadow-xl w-full border rounded-xl text-black`}>
                    <div className='flex justify-between'>
                      <h2 className='font-bold text-xl'> {task?.name_evento}</h2>
                      {
                        new Date().toLocaleDateString() === new Date(task?.fecha_evento).toLocaleDateString() &&
                        <Image src="/icon.png" alt="Evento Hoy" height={20} width={50} className='-mb-2' />
                      }
                    </div>
                    <div className=''>
                      <h4 className='text-lg'>{task?.organizador}</h4>
                      <h5>{new Date(task?.fecha_evento).toLocaleDateString('es-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</h5>
                      <InterestBar id={task?.Id} />
                    </div>
                  </div>
                </Link>
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
      <Link href={"/"} className='fixed right-6 bottom-28'>
        <Fab className='bg-[#FC7823]' size='large'>
          <AddIcon className='text-white' />
        </Fab>
      </Link>
      <NavBar />
    </div>
  )
}

export default Mytaks