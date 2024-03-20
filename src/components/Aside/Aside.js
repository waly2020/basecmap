import { APP_ASSETS } from "../../utils/assets";
import ButtonIcon from "../buttons/ButtonIcon";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Aside = ({active = false,onClose}) => {
    const closeAside = () =>{
        if(onClose){
            onClose();
        }
    }
    return (
        <aside className={`fixed w-[300px] bg-white shadow-xl z-20 h-full top-0 right-0 transition ${active ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
        <div className="flex flex-col items-center gap-4">
            <div className="w-full relative p-3 flex flex-col gap-3 justify-center items-center">
                <ButtonIcon onClick={closeAside} icon={<IoMdArrowRoundBack/>} className="absolute right-3 top-3 flex justify-center items-center rounded rotate-[180deg] bg-gray-100 text-gray-600"/>
                <img src={APP_ASSETS.profil} className="w-[100px] h-[100px] rounded-[30px] object-cover"/>
                <p className="text-center bottom-0 w-full py-1">abcef@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2 w-full px-2">
                <ButtonIcon icon={<RiProfileLine size={23}/>} className="bg-green-500 rounded text-white">Edite my profil</ButtonIcon>
                <ButtonIcon icon={<CiLogout size={23}/>} className="bg-red-600 text-white rounded">Log out</ButtonIcon>
            </div>
        </div>
        </aside>
    );
}

export default Aside;