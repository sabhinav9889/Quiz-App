import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

type Props = {
    theme: Boolean;
}
export default function({theme}:Props){
    return(
        <div className="flex justify-center w-full pl-8 pr-8">
                <div className="md:flex justify-between w-full">
                    <div className={`border mt-6 md:w-[47%] cursor-pointer h-32 font-bold  rounded-lg ${theme?'border-blackTheme':'border-whiteTheme'} pt-4 pl-4 hover:shadow-lg`}>
                        <div className="flex justify-between">
                          <span className="text-xl lg:text-3xl mb-6">Ready For Quiz!</span> 
                          <FontAwesomeIcon icon={faBook} size="2xl" className="font-2xl mr-4" />    
                        </div>
                        <p>Read a topic and start a new quiz</p>
                    </div>
                    <div className={`border mt-6 md:w-[47%] h-32 cursor-pointer font-bold rounded-lg ${theme?'border-blackTheme':'border-whiteTheme'} pt-4 pl-4 hover:shadow-lg`}>
                        <div className="flex justify-between">
                          <span className="text-xl lg:text-3xl mb-6">Attempted Quiz</span> 
                          <FontAwesomeIcon icon={faClockRotateLeft} size="2xl" className="font-2xl mr-4" />
                        </div>
                        <p>Start from previously attempted quiz</p>
                    </div>
                </div>
        </div>
    )
}