import { useMirrorWorld } from '@/hooks/useMirrorWorld';
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const { login } = useMirrorWorld();
  const Login = async () => {
    login();
  }

  return (
    <>
      <Head>
        <title>Proactive Week</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center flex-col h-screen space-y-10">
        <Image src={"/logo-light.png"} width={300} height={300} alt="Image Main" />
        <div className='flex items-center justify-center flex-col space-y-6'>
          <button onClick={() => Login()} className='w-[250px] py-2 px-10 bg-[#FC7823] rounded-lg'>
            Login
          </button>
        </div>
      </main>
    </>
  )
}
