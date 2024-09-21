import Quiz from "./Quiz";
import { loginIsRequired } from "@/lib/nextAuth";
import axios, {AxiosError} from "axios";
export default async function(){
    await loginIsRequired();
    return(
        <>
         <Quiz/>
        </>
    )
}