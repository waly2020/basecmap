import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineNumber,
  AiOutlineHome,
  AiFillPieChart,
} from "react-icons/ai";
import {
  LiaHospitalSymbolSolid,
  LiaBirthdayCakeSolid,
  LiaLanguageSolid,
  LiaMapMarkedAltSolid,
} from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { GiAchievement, GiNetworkBars } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

const ButtonIcon = ({ children }) => {
  return (
    <button className="flex gap-5 items-center bg-black text-white px-4 py-2">
      <AiOutlineUser size={20} />
      {children}
    </button>
  );
};

export default ButtonIcon;
