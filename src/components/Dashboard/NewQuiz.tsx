import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
type Props = {
    theme: Boolean;
}
export default function NewQuiz({theme}:Props){
    return(
        <>
         <div className="flex justify-between">
                <span className="text-xl lg:text-3xl mb-6">Ready For Quiz!</span> 
                <FontAwesomeIcon icon={faBook} size="2xl" className="font-2xl mr-4" />    
            </div>
            <p>Read a topic and start a new quiz</p>
        </>
    )
}