import ButtonLoader from "../../components/buttons/ButtonLoader";
import InputIcons from "../../components/inputs/InputIcons";
// cloud 9 - tubo
const SignUp = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center p-4">
      <form className="p-3 shadow rounded w-full max-w-[700px]">
        <h3 className="text-center font-bold uppercase text-2xl pt-4 pb-8">Sign Up</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <InputIcons placeholder="Your name" className="sm:col-span-2"/>
            <InputIcons placeholder="Your e-mail" className="sm:col-span-2"/>
            <InputIcons placeholder="Your password"/>
            <InputIcons placeholder="Confirm your password"/>
            <ButtonLoader className="sm:col-span-2 mt-3"/>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
