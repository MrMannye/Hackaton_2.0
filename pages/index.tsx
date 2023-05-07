import { WalletMultiButton, WalletModalButton, WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import Head from 'next/head'
import Image from 'next/image'
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function Home() {
  const {connected} = useWallet();
  const router = useRouter();
  const Login = async () => {
    console.log("Hola")
  }
  // useEffect(() => {
  //   if(connected) router.push("/mytasks")
  // }, [connected])
  

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
          <div className='w-full text-white flex items-center justify-center font-semibold tracking-wider rounded-lg'>
            <WalletMultiButton className="w-full flex items-center justify-center !bg-black"/>
          </div>
        </div>
      </main>
    </>
  )
}
