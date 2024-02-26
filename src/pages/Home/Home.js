import Aside from "../../components/Aside/Aside";
import User from "../../components/User/User";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import { APP_ASSETS } from "../../utils/assets";

const Home = () => {
    return (
        <>
            <nav className="h-[70px] flex justify-between items-center px-4 w-full max-w-[900px] m-auto">
            <img alt="logo letter" src={APP_ASSETS.logo_lettre_noire} className="h-[70%]"/>
            <div className="flex gap-20 justify-between items-center">
                <ButtonIcon>
                    Add project
                </ButtonIcon>
                <button className="burger">
                    <div className="top"></div>
                    <div className="midle"></div>
                    <div className="bottom"></div>
                </button>
            </div>
        </nav>
        <Aside active={true}/>
        </>
    );
}

export default Home;