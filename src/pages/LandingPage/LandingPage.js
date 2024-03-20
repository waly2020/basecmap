import { Link } from "react-router-dom";
import Lorem from "../../components/Lorem";
import { APP_ASSETS } from "../../utils/assets";
import { AiOutlineUser } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import { forwardRef } from "react";
import { motion } from "framer-motion";


const mainVariante = {
  start : {
    opacity : 1,
  },
  end : {
      transition: {staggerChildren: .5}
    }
  
}

const imageVariante = {
  start : {
    translateY : 300,
  },
  end : {
    translateY : 0,
  }
}

const LandingPage = () => {
  return (
    <header className="relative">
    <div className="absolute left-0 top-0 w-full h-full opacity-[0.1]">
      <img className="w-full h-full" src={APP_ASSETS.background}/>
    </div>
    <div className="relative min-h-screen w-full max-w-[1200px] m-auto grid grid-rows-[80px,1fr]">
    <Navigation/>
      <Content/>
    </div>
      
    </header>
  );
};
const Navigation = () =>{
  return (
    <nav className="sm:px-5 px-2 gap-2 py-7 flex justify-between items-center">
      <img className="h-[45px]" src={APP_ASSETS.logo}/>
      <Link to="/login" className="w-full max-w-[200px]">
      <ButtonIcon className="bg-blue-500 rounded shadow text-white w-full justify-center" icon={<AiOutlineUser/>}>
        Login
      </ButtonIcon>
      </Link>
    </nav>
  )
}
const Content = () =>{
  return (
    <div className="sm:px-5 px-2 grid grid-cols-1 md:grid-cols-2 h-full items-center">
      <div className="relative flex md:block flex-col justify-center items-center">
        <h1 className="sm:text-7xl text-center md:text-left text-5xl font-bold">Welcome to <span className="block uppercase text-blue-700">basecamp</span></h1>
        <Lorem className="my-3 text-center md:text-left  text-lg" word={10}/>
        <Link to="/login">
        <ButtonIcon className="bg-green-500 rounded w-full max-w-[350px] text-white shadow" icon={<FaTasks/>}>
          Get started
        </ButtonIcon>
        </Link>
      </div>
      <motion.div variants={mainVariante} transition={{type : "tween"}} initial={"start"} animate={"end"}  className="relative hidden md:block overflow-hidden">
        <motion.img variants={imageVariante} className="relative z-[3]" src={APP_ASSETS.from_3}/>
        <MotionImg variants={imageVariante} img={APP_ASSETS.from_1} className="left-0 top-0"/>
        <MotionImg variants={imageVariante} img={APP_ASSETS.from_4} className="right-0 bottom-0 z-10"/>
        <MotionImg variants={imageVariante} img={APP_ASSETS.from_5} className="left-0 bottom-0 z-10"/>
      </motion.div>
    </div>
  )
}

const AbsoluteImg = forwardRef(({img = "",className = ""},ref) =>{
  return (
    <div ref={ref} className={`absolute ${className}`}>
    <img src={img} className={`w-[200px]`}/>
    </div>
  )
})

const MotionImg = motion(AbsoluteImg);

export default LandingPage;
/*






 // add members
 // add project



 // chat group

 // mail

 // set profile
*/