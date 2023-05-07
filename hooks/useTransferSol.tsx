import { userState } from "@/features/user/userSlice";
import { RootState } from "@/store/store";
import axios from "axios";
import { useSelector } from "react-redux";

export default async function UseTransferSol(user: userState) {
    const friendTransfer = await axios.post("", {
        sol_address: "",
    })
    // SI ES FIN DE SEMANA, ES DECIR, SABADO
    if(new Date().getDay() === 6){
        console.log("Hola")
    }
}
