import { userState } from "@/features/user/userSlice";
import axios from "axios";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

export default async function UseTransferSol() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    if (!publicKey) throw new WalletNotConnectedError();

    const friendTransfer:string = await axios.post("", {
        sol_address: "",
    })
    const newFriendTransfer = new PublicKey(friendTransfer);
    // SI ES FIN DE SEMANA, ES DECIR, SABADO
    if(new Date().getDay() === 6){

        const lamports = await connection.getMinimumBalanceForRentExemption(0);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: newFriendTransfer,
                lamports,
            })
        );
        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, { minContextSlot });

        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    }
}
