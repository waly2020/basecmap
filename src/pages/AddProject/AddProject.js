import ButtonIcon from "../../components/buttons/ButtonIcon";
import InputIcons from "../../components/inputs/InputIcons";

const AddProject = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col">
           <h1 className="font-bold text-4xl mb-5 uppercase">Add new project</h1>
            <div className="w-full max-w-[500px] px-3 py-5 flex flex-col gap-5 shadow-lg rounded">
                <InputIcons placeholder="Project name..."/>
                <textarea className="resize-none bg-gray-100 rounded p-3 min-h-[200px] outline-gray-300" placeholder="Project description..."/>
                <ButtonIcon className="bg-green-500 text-white justify-center rounded py-3">
                    Create project
                </ButtonIcon>
            </div>
        </div>
    );
}

export default AddProject;