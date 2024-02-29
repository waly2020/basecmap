import { useState } from "react";
import Aside from "../../components/Aside/Aside";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import { APP_ASSETS } from "../../utils/assets";
import Searsh from "../../components/Searsh/Searsh";
import Project from "../../components/Project/Project";

const Home = () => {
    const [activeAside,setActiveAside] = useState(false);
    const projects = [1,2,3,4,5,6,7,8,9,0];
    return (
        <>
            <nav className="h-[70px] flex justify-between items-center px-4 w-full max-w-[1200px] m-auto">
            <img alt="logo letter" src={APP_ASSETS.logo_lettre_noire} className="h-[70%]"/>
            <div className="flex gap-20 justify-between items-center">
                <ButtonIcon>
                    Add project
                </ButtonIcon>
                <button className="burger" onClick={() => {setActiveAside(true)}}>
                    <div className="top"></div>
                    <div className="midle"></div>
                    <div className="bottom"></div>
                </button>
            </div>
        </nav>
        <Aside active={activeAside} onClose={() =>{setActiveAside(false)}}/>
        <main className="w-full max-w-[1200px] mx-auto px-4">
            <Searsh/>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {projects.map((p,i,_) =>(<Project id={i + p}/>))}
            </div>
        </main>
        </>
    );
}

export default Home;