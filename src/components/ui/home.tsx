import { description } from "@/app/constant";
import { Button } from "./button";
import { appName } from "@/app/constant";

const Home = ()=>{
    return(
        <div className="">
         <div className="w-full flex justify-center p-8">
            <h1 className="lg:text-5xl md:text-3xl">Welcome to {appName}</h1>
         </div>
         <div className="w-full flex justify-center mt-12">
            <div className="w-1/2 md:p-10 md:text-2xl text-gray-400">
              {description}
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Button>Login in with Google</Button>
          </div>
        </div>
    )
}

export default Home;