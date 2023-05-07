import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Head from 'next/head'
import Image from 'next/image'
import { useWallet } from "@solana/wallet-adapter-react";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  const wallet = useWallet();
  const Login = async () => {
    console.log("Hola")
  }

  return (
    <>
      <Head>
        <title>Proactive Week</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen w-screen">
        <Image src={"/logo-light.png"} width={200} height={200} alt="Image Main" />
        <div className='w-2/3'>
          <div onClick={() => Login()} className='w-full text-white flex items-center justify-center font-semibold tracking-wider bg-[#FC7823] rounded-lg'>
            <WalletMultiButton className="bg-[#FC7823]"/>
          </div>
        </div>
      </main>
    </>
  )
}
