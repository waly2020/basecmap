import { Link } from "react-router-dom";
import ButtonLoader from "../../components/buttons/ButtonLoader";
import InputIcons from "../../components/inputs/InputIcons";
import { APP_ASSETS } from "../../utils/assets";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
// cloud 9 - tubo
const SignUp = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center p-4">
      <form className="p-3 rounded w-full max-w-[700px]">
        <div className="flex justify-between mb-6 mt-3 flex-col items-center">
          <div className="flex justify-center items-center mb-2">
          <img
            src={APP_ASSETS.logo}
            alt="logo blanc"
            className="h-[50px]"
          />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 shadow-lg px-3 py-5 rounded">
          <h3 className="font-bold uppercase text-2xl text-center my-4 w-full col-span-2">Sign Up</h3>
          <InputIcons placeholder="Your name" className="sm:col-span-2" />
          <InputIcons icon={<MdOutlineMarkEmailRead size={20}/>} placeholder="Your e-mail" className="sm:col-span-2" />
          <InputIcons icon={<PiPasswordBold size={20}/>} placeholder="Your password" />
          <InputIcons icon={<PiPasswordBold size={20}/>} placeholder="Confirm your password" />
          <Link to="/home" className="sm:col-span-2 mt-3">
          <ButtonLoader className="bg-green-500 text-white rounded">
            Sign up now
          </ButtonLoader>
          </Link>
          <Link to="/login" className="text-center col-span-2 block mt-4 text-blue-600">I have account...</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
