import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faClock, faListCheck} from "@fortawesome/free-solid-svg-icons"

type Props = {
    obj: {topic: string, Date: string, isMCQ: Boolean};
    theme: Boolean;
}
export default function RecentActive({obj, theme}:Props){
    return(
        <div className="flex">
            <div className="p-7">
              {(obj.isMCQ)?<FontAwesomeIcon icon={faListCheck} />:<FontAwesomeIcon icon={faEdit}/>}
            </div>
            <div className="p-2 cursor-pointer">
                <p className="text-left underline">{obj.topic}</p>
                <div className={`${(theme)?'bg-secondary text-primary':'bg-primary text-secondary'}  p-1 rounded-lg text-xs pl-2 pr-2 w-24`}>
                  <FontAwesomeIcon icon={faClock} className="pr-1" />
                  {obj.Date}
                </div>
                {(obj.isMCQ)?<p className="text-xs mt-1">Multiple Choice</p>:<p className="text-xs mt-1"  >Open-Ended</p>}
            </div>
        </div>
    )
}