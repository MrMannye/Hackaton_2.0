import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next';
import { randomInt } from 'crypto';

function InterestBar({ id }: any) {

  const [interests, setinterests] = useState<any>([]);
  const emojis = {
    "Programacion": "💻",
    "Escritura": "📝",
    "Lectura": "📖",
    "Artes Visuales": "👀",
    "Deportes": "🏀",
    "Aire Libre": "🍃",
    "Artes Marciales": "🥊",
    "Juegos": "🎮",
    "Musica": "🎧",
    "Artes": "🎱",
    "Fotografia": "📷",
    "Idiomas": "🕵"
  }
  const intereses = [
    {"Programacion": "💻"},
    {"Escritura": "📝"},
    {"Lectura": "📖"},
    {"Artes Visuales": "👀"},
    {"Deportes": "🏀"},
    {"Aire Libre": "🍃"},
    {"Artes Marciales": "🥊"},
    {"Juegos": "🎮"},
    {"Musica": "🎧"},
    {"Artes": "🎱"},
    {"Fotografia": "📷"},
    {"Idiomas": "🕵"}
  ]
  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }


  useEffect(() => {
    const random = getRandomInt(2) + 1;
    for (let index = 0; index < random; index++) {
      const randomInterest = getRandomInt(12);
      setinterests([...interests, Object.keys(intereses[randomInterest]).toString()])
    }
  }, [])

  console.log(interests)
  return (
    <div className='flex items-center space-x-2 mt-4'>
      {interests?.map((interest:any) => {
        return (
          <div className='p-2 cursor-default bg-slate-50 bg-opacity-40 text-xs rounded-full flex items-center space-x-1' key={interest}>
            <span>{emojis[(interest) as keyof typeof emojis]}</span>
            <span>{interest}</span>
          </div>
        )
      })}
    </div>
  )
}

export default InterestBar

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context.query)
  return {
    props: {
      id: context.query.id //pass it to the page props
    }
  }
}