import DashBoard from "./DashBoard";
import {loginIsRequired, getUserDetails} from "@/lib/nextAuth";
import axios, {AxiosError} from 'axios';
import redirect from 'next/navigation'
export default async function DashBoardMain(){
  try{
    await loginIsRequired();
    const user = await getUserDetails();
    const data = {
      newUser: user
    }
    console.log("data...................................",data);

    const response = await axios.post("http://localhost:3000/api/newUser", data);
  }catch(e){
    console.log(e);
  }
  return(
    <>
     <DashBoard/>
    </>
  ) 
}