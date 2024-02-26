import { APP_ASSETS } from "../../utils/assets";

const Aside = ({active = false}) => {
    return (
        <aside>
        <div>
            <div>
                <img src={APP_ASSETS.profil} className="w-[100px] h-[100px] rounded-[99px]"/>
            </div>
            <ul>
                <li>abcef@gmail.com</li>
                <li>Edit my profil</li>
                <li>Loug out</li>
            </ul>
        </div>
        </aside>
    );
}

export default Aside;