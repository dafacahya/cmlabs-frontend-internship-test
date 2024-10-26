import {FaApple, FaHamburger, FaPizzaSlice} from "react-icons/fa";
const IconWrapper = () =>{
    return(
        <div className="flex justify-center gap-4 mb-2">
            <FaApple className="text-red-500 text-2xl"/>
            <FaHamburger className="text-blue-500 text-2xl"/>
            <FaPizzaSlice className="text-green-500 text-2xl"/>
        </div>
    );
};

export default IconWrapper;