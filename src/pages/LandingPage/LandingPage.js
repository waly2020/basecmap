import Lorem from "../../components/Lorem";
import { APP_ASSETS } from "../../utils/assets";

const LandingPage = () => {
  return (
    <header className="w-full relative h-[100vh] bg-[rgba(0,0,0,0.8)] grid grid-cols-2 grid-rows-[70px,1fr]">
      <img src={APP_ASSETS.header} alt="shadow" className="absolute z-[-1] w-full h-full"/>
      <nav className="col-span-2 flex items-center justify-between px-4">
        <p className="font-bold text-white">BASECAMP</p>
        <div className="grid gap-2 grid-cols-2">
          <button className="text-white cursor-pointer">Login</button>
          <button className="text-white cursor-pointer">Sign Up</button>
        </div>
      </nav>
      <div className="p-4 flex items-center justify-center">
        <img src={APP_ASSETS.header} alt="header"/>
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h1 className="text-8xl font-bold text-white">Welcome to BASECAMP APP</h1>
        <Lorem className="text-gray-400"/>
        <div className="flex gap-3 my-5 items-center">
          <button className="text-white font-bold cursor-pointer bg-black px-10 py-2 rounded-[99px]">Login</button>
          <p className="select-none text-white">or</p>
          <button className="text-black font-bold cursor-pointer bg-white px-10 py-2 rounded-[99px]">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default LandingPage;
