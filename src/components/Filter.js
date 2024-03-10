import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
const Filter = () => {
    const [displayFilter,setDisplayFilter] = useState(false);
    const onDisplayFilter = () =>{
        setDisplayFilter(!displayFilter);
    }
  return (
    <div className="relative z-10">
      <button onClick={onDisplayFilter} className="w-full h-full bg-black text-white flex justify-center items-center">
        <IoMdArrowRoundBack size={20}/>
      </button>
      <div className={`${displayFilter ? 'block' : 'hidden'} absolute right-0 z-[-1] w-[230px] translate-y-[5px] grid grid-rows-[repeat(3,45px)] [&>button]:bg-black gap-2 [&>button]:text-white`}>
        <button>All projects</button>
        <button>Create by me</button>
        <button>Shared with me</button>
      </div>
    </div>
  );
};

export default Filter;
