import { APP_ASSETS } from "../../utils/assets";
import ButtonIcon from "../buttons/ButtonIcon";
import { IoMdArrowRoundBack } from "react-icons/io";

const Aside = ({active = false,onClose}) => {
    const closeAside = () =>{
        if(onClose){
            onClose();
        }
    }
    return (
        <aside className={`fixed w-[300px] bg-black h-full top-0 right-0 transition ${active ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
        <div className="flex flex-col items-center gap-4">
            <div className="w-full relative">
                <button onClick={closeAside} className="absolute right-3 top-3 w-[30px] h-[30px] flex justify-center items-center rounded-[999px] rotate-[180deg] bg-black text-white">
                    <IoMdArrowRoundBack/>
                </button>
                <img src={APP_ASSETS.profil} className="w-full h-[200px] object-cover"/>
                <p className="text-center font-bold absolute bottom-0 w-full py-1 bg-[rgba(0,0,0,0.5)] text-white">abcef@gmail.com</p>
            </div>
            <div className="flex flex-col gap-5 w-full px-2">
                <ButtonIcon className="border-white border-2">Edite my profil</ButtonIcon>
                <ButtonIcon className="border-white border-2">Log out</ButtonIcon>
            </div>
        </div>
        </aside>
    );
}

export default Aside;