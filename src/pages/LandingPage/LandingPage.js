import { Link } from "react-router-dom";
import Lorem from "../../components/Lorem";
import { APP_ASSETS } from "../../utils/assets";

const LandingPage = () => {
  return (
    <header className="w-full relative h-[100vh] bg-[rgba(0,0,0,0.8)] grid grid-cols-2 grid-rows-[70px,1fr]">
      <img src={APP_ASSETS.background} alt="shadow" className="absolute z-[-1] w-full h-full object-cover"/>
      <nav className="col-span-2 flex items-center justify-between px-4">
        <img src={APP_ASSETS.logo_long_blanc} alt="logo blanc" className="h-[50%]"/>
        <div className="grid gap-2 grid-cols-2">
        </div>
      </nav>
      <div className="p-4 flex items-center justify-center relative overflow-hidden">
        <img src={APP_ASSETS.header_3} alt="header" className="absolute object-cover top-0 left-0 translate-x-[-10%]"/>
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h1 className="text-8xl font-bold text-white">Welcome to BASECAMP APP</h1>
        <Lorem className="text-gray-400"/>
        <div className="flex gap-3 my-5 items-center">
          <Link to="/login" className="text-white font-bold cursor-pointer bg-black px-10 py-2 rounded-[99px] border-white border-2">Login</Link>
          <p className="select-none text-white">or</p>
          <Link to="/signup" className="text-black font-bold cursor-pointer bg-white px-10 py-2 rounded-[99px]">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default LandingPage;
