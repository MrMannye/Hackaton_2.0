import NavBar from '@/components/NavBar'
import React, { useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router';
import Link from 'next/link';
import InterestBar from '@/components/InterestBar';
import AnimateTitle from '@/components/AnimateTitle';
import Transition from '@/components/Transition';
import { useWallet } from '@solana/wallet-adapter-react';
import Image from 'next/image';

interface Task {
  id: number
  nombre_task: string,
  descripcion_task: string,
  completed_task: boolean,
  user_address: string,
  created_task: Date
}

function Completed() {

  const { connected, publicKey } = useWallet();
  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const router = useRouter();
  const colorsBackground = ["from-cyan-300 to-blue-300", "from-indigo-300 to-pink-300", "from-indigo-300 from-cyan-300", "from-blue-400 to-orange-200", "from-purple-400 to-yellow-200", "from-cyan-400 to-blue-400", "from-indigo-400 to-pink-300", "from-indigo-400 from-cyan-400", "from-blue-400 to-orange-200", "from-rose-300 to-yellow-200"]

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (!connected) router.push("/")
  }, [connected])

  useEffect(() => {
    fetch(`https://proactiveweek-superbrandon2018.b4a.run/tasks/myCompletedTasks/${base58}`)
      .then(response => response.json())
      .then(data => setTasks(data.body)).catch(e => {
        console.log("Pensaste, de que coño va este pavo?")
      })
  }, [])

  const selectColor = (): string => {
    let random: number = parseInt((Math.random() * 10).toFixed(0));
    let color: string = colorsBackground[random];
    return color === undefined ? "from-rose-300 to-lime-300" : color
  }

  return (
    <div className='h-screen relative w-screen'>
      <Transition />
      <h1 className='text-4xl p-4 py-5 text-white font-bold bg-[#FC7823]'>
        <AnimateTitle text='My Completed' className='' />
      </h1>
      <div className='p-3'>
        <main className='flex w-full flex-col items-start mb-24 space-y-4'>
          {tasks?.map((task, index) => {
            return (
              <div key={task?.id} className={`p-4 bg-gradient-to-r ${selectColor()} bg-o shadow-xl w-full border rounded-xl text-black`}>
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
            )
          })}
        </main>
      </div>
      <NavBar />
    </div>
  )
}

export default Completed