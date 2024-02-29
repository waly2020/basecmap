import { IoMdArrowRoundBack } from "react-icons/io";
import Lorem from "../Lorem";
import ButtonNotif from "../buttons/ButtonNotif";
import { Link } from "react-router-dom";
/*
- name project,
- user e-mail,
- project description,
- button set project data,
  - button add member,
  - set name
  - set description
- button message,
  - create discussion
  - write a message
  - delet discussion
  - delet message
- button delete
  - modal 'want you realy delete this project ?'
*/

const Project = ({id = 0}) => {
  return (
    <div className=" w-full max-w-[300px] border">
      <div className="bg-[#717171] grid grid-cols-[1fr,45px] p-2 gap-2">
        <p className="text-white">Project name</p>
        <Link to={`/details/${id}`} className="flex text-white justify-end items-center">
          <IoMdArrowRoundBack size={18}/>
        </Link>
        <p className="col-span-2 text-white">Project@gmail.com</p>
      </div>
      <div className="p-2">
        <Lorem className="text-gray-500"/>
      </div>
      <div className="bg-gray-100 py-3 px-2 flex justify-between">
        <div className="flex gap-3">
          <ButtonNotif value={id} className="btn-project">g</ButtonNotif>
          <ButtonNotif value={id * 3} className="btn-project">m</ButtonNotif>
        </div>
        <button className="btn-project">d</button>
      </div>
    </div>
  );
};

export default Project;
