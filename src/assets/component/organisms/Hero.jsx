import IconWrapper from "../atoms/IconWrapper";
import MainTitle from "../atoms/MainTitle";
import Subtitle from "../atoms/Subtitle";

const Hero = () =>{
    return(
        <div className="min-vh-[60vh] flex flex-col justify-center items=center px-4 mt-6">
            <IconWrapper/>
            <Subtitle name =" mealapp API website"/>
            <MainTitle name = "See All The Delicious Foods"/>
        </div>
    )
}

export default Hero;