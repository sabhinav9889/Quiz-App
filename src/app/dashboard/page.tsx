import DashBoard from "./DashBoard";
import {loginIsRequired} from "@/lib/nextAuth";
export default async function DashBoardMain(){
  await loginIsRequired();
  return(
    <>
     <DashBoard/>
    </>
  ) 
}