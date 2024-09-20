import DashBoard from "./DashBoard";
import {loginIsRequired, getUserDetails} from "@/lib/nextAuth";
import axios, {AxiosError} from 'axios';
export default async function DashBoardMain(){
  await loginIsRequired();
  const user = await getUserDetails();
  const data = {
    newUser: user
  }
  const response = await axios.post("http://localhost:3000/api/newUser", data);
  return(
    <>
     <DashBoard/>
    </>
  ) 
}