import Quiz from "./Quiz";
import { loginIsRequired } from "@/lib/nextAuth";
export default async function(){
    await loginIsRequired();
    return(
        <>
         <Quiz/>
        </>
    )
}