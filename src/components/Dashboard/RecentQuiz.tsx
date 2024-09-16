import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
type Props = {
    theme: Boolean;
}
export default function RecentQuiz({theme}:Props){
    return(
        <>
            <div className="flex justify-between">
                <span className="text-xl lg:text-3xl mb-6">Attempted Quiz</span> 
                <FontAwesomeIcon icon={faClockRotateLeft} size="2xl" className="font-2xl mr-4" />
            </div>
            <p>Start from previously attempted quiz</p>
        </>
    )
}