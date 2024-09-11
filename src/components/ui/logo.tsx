import { appName } from "@/app/constant"

export default function(){
    return(
        <div className="p-2 flex h-12">
            <div className="border rounded-md p-2 w-24 h-10 text-center cursor-pointer border-gray-400 hover:shadow-md">{appName}</div>
        </div>
    )
}