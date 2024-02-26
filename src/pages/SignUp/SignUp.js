import { Link } from "react-router-dom";
import ButtonLoader from "../../components/buttons/ButtonLoader";
import InputIcons from "../../components/inputs/InputIcons";
import { APP_ASSETS } from "../../utils/assets";
// cloud 9 - tubo
const SignUp = () => {
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
          <h3 className="font-bold uppercase text-2xl">Sign Up</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <InputIcons placeholder="Your name" className="sm:col-span-2" />
          <InputIcons placeholder="Your e-mail" className="sm:col-span-2" />
          <InputIcons placeholder="Your password" />
          <InputIcons placeholder="Confirm your password" />
          <Link to="/home" className="sm:col-span-2 mt-3">
          <ButtonLoader/>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
