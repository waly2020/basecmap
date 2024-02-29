const InputIcons = ({className,placeholder = "",name = "",type = "text",id = ""}) => {
    return (
        <div className={`w-full grid grid-cols-[45px,1fr] h-[45px] bg-[#fff] overflow-hidden ${className ?? ""}`}>
            <div className="flex justify-center items-center bg-black text-white">
                <p>i</p>
            </div>
            <input type={type} name={name} id={id} placeholder={placeholder} className="bg-transparent px-2 outline-none"/>
        </div>
    );
}

export default InputIcons;