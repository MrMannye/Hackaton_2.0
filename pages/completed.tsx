import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useMirrorWorld } from '@/hooks/useMirrorWorld';
import { useRouter } from 'next/router';
import Link from 'next/link';
import InterestBar from '@/components/InterestBar';

interface Event {
  Id: number,
  name_evento: string,
  organizador: string,
  descripcion_evento: string,
  fecha_evento: Date,
}

function Completed() {

  const user = useSelector((state: RootState) => state?.user);
  const router = useRouter();
  const colorsBackground = ["from-cyan-300 to-blue-300", "from-indigo-300 to-pink-300", "from-indigo-300 from-cyan-300", "from-blue-400 to-orange-200", "from-purple-400 to-yellow-200", "from-cyan-400 to-blue-400", "from-indigo-400 to-pink-300", "from-indigo-400 from-cyan-400", "from-blue-400 to-orange-200", "from-rose-300 to-yellow-200"]

  const [tasks, setTasks] = useState<Event[]>([])
  const user_publickey = useSelector((state: RootState) => state.user?.wallet?.sol_address);
  
  useEffect(() => {
    if (user === undefined) router.push("/");
  },[])
  
  useEffect(() => {
    fetch("https://proactive-node.herokuapp.com/completedTasks/" + user_publickey)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, [])

  const selectColor = (): string => {
    let random: number = parseInt((Math.random() * 10).toFixed(0));
    let color: string = colorsBackground[random];
    return color === undefined ? "from-rose-300 to-lime-300" : color
  }

  return (
    <div className='h-screen relative w-screen'>
      <h1 className=' text-4xl p-4 py-5 text-white font-bold bg-[#FC7823]'>Completed Tasks</h1>
      <div className='p-3'>
        <h2>Completed Tasks</h2>
        <main className='flex w-full flex-col items-start mb-24 space-y-4'>
        {tasks.map((task, index) => {
          return (
            <Link key={task?.Id} href={`/eventos/${task?.Id}`} className='w-full'>
                  <div className={`p-4 bg-gradient-to-r ${selectColor()} bg-o shadow-xl w-full border rounded-xl text-black`}>
                    <div className='flex justify-between'>
                      <h2 className='font-bold text-xl'> {task?.name_evento}</h2>
                    </div>
                    <div className=''>
                      <h4 className='text-lg'>{task?.organizador}</h4>
                      <h5>{new Date(task?.fecha_evento).toLocaleDateString('es-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</h5>
                      <InterestBar id={task?.Id} />
                    </div>
                  </div>
                </Link>
          )
        })}
        </main>
      </div>
      <NavBar />
    </div>
  )
}

export default Completed