import { Link } from "react-router-dom";
import ButtonLoader from "../../components/buttons/ButtonLoader";
import InputIcons from "../../components/inputs/InputIcons";
import { APP_ASSETS } from "../../utils/assets";
// cloud 9 - tubo
const Login = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center p-4 bg-[#f9f9f9]">
      <form className="p-3 rounded w-full max-w-[700px]">
        <div className="flex justify-between mb-6 mt-3 flex-col items-center">
          <div className="w-[100px] h-[100px] bg-white rounded-[99px] flex justify-center shadow items-center mb-2">
          <img
            src={APP_ASSETS.logo_lettre_noire}
            alt="logo blanc"
            className="h-[50px]"
          />
          </div>
          <h3 className="font-bold uppercase text-2xl">Login</h3>
        </div>
        <div>
          <InputIcons placeholder="Your e-mail" className="my-4" />
          <InputIcons placeholder="Your password" className="my-4"/>
          <Link to="/home" className="mt-3">
          <ButtonLoader/>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
