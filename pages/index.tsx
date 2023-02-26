import { MirrorWorld, ClusterEnvironment } from '@mirrorworld/web3.js';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useDispatch } from 'react-redux'
import { saveUser } from '@/features/user/userSlice';

export default function Home() {

  const router = useRouter();
  const dispatch = useDispatch()
  const mirrorWorld = new MirrorWorld({
    apiKey: "mw_EQhbJbLVBaIwuQiXjemZhmIAJGqgFnWRIkI",
    env: ClusterEnvironment.testnet,
  })
  const login = async () => {
    const result = await mirrorWorld.login();
    console.log(result.user);
    dispatch(saveUser(result.user));
    router.push("/completed")
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
          <button onClick={() => login()} className='w-[250px] py-2 px-10 bg-[#FC7823] rounded-lg'>
            Login
          </button>
        </div>
      </main>
    </>
  )
}
