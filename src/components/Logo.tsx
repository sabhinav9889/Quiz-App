import { appName } from "@/app/constant"

export default function({theme}:any){
    return(
        <div className="p-2 flex h-12">
            <div className={`border rounded-md p-2 w-24 h-10 text-center font-bold cursor-pointer ${(theme)?'bg-secondary text-primary':'bg-primary text-secondary'} hover:shadow-md`}>{appName}</div>
        </div>
    )
}