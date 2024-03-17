import {
    AiOutlineUser
  } from "react-icons/ai";
  
const InputIcons = ({className = "",placeholder = "",name = "",type = "text",id = ""}) => {
    return (
        <div className={`w-full grid grid-cols-[45px,1fr] h-[45px] bg-gray-300 overflow-hidden rounded ${className ?? ""}`}>
            <div className="flex justify-center items-center">
                <p className="text-gray-800">
                    <AiOutlineUser size={20}/>
                </p>
            </div>
            <input type={type} name={name} id={id} placeholder={placeholder} className="bg-gray-100 px-2 outline-none"/>
        </div>
    );
}

export default InputIcons;