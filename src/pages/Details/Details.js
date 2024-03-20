import { Link } from "react-router-dom";
import { APP_ASSETS } from "../../utils/assets";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import SectionIcon from "../../components/sections/SectionIcon";
import Lorem from "../../components/Lorem";
import { hiddenText } from "../../utils/functions";
import Member from "../../components/members/Member";
import { DISCUSSIONS, attachments, members } from "../../utils/datas";
import Attachment from "../../components/Attachment";
import Gallery from "../../components/Gallery/Gallery";
import { useState } from "react";
import Task from "../../components/Task";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import { MdAddTask } from "react-icons/md";
import Discussions from "../../components/Discussions/Discussions";
import Modal from "../../components/Modal/Modal";
import AddMember from "../../components/Modal/AddMember";
import SettingProject from "../../components/Modal/SettingProject";
import AddNewTask from "../../components/Modal/AddNewTask";
import AddFiles from "../../components/Modal/AddFiles";
import AddDiscussion from "../../components/Modal/AddDiscussion";
import SeeMembers from "../../components/Modal/SeeMembers";
import SeeTasks from "../../components/Modal/SeeTasks";
import { MdGroupAdd } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { RiImageAddFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdOptions } from "react-icons/io";

const Details = () => {
  const [aside,setAside] = useState(false);
  const [gallery,setGallery] = useState(false);
  const [index,setIndex] = useState(0);
  const [addMember,setAddMember] = useState(false);
  const [settingProject,setSettingProject] = useState(false);
  const [addTask,setAddTask] = useState(false);
  const [addFiles,setAddFiles] = useState(false);
  const [addDiscussion,setAddDiscussion] = useState(false);
  const [seeMembers,setSeeMembers] = useState(false);
  const [seeTasks,setSeeTasks] = useState(false);
  const onSeeTasks = () =>{
    setSeeTasks(!seeTasks);
  }
  const onSeeMembers = () =>{
    setSeeMembers(!seeMembers);
  }
  const onAddDiscussion = () =>{
    setAddDiscussion(!addDiscussion);
  }
  const onAddFiles = () =>{
    setAddFiles(!addFiles);
  }
  const onAddTask = () =>{
    setAddTask(!addTask);
  }
  const onAddMember = () =>{
    setAddMember(!addMember);
  }
  const onSetting = () =>{
    setSettingProject(!settingProject);
  }
  const seeGallery = () =>{
    setGallery(!gallery);
  }
  const activeAside = () =>{
    setAside(!aside);
  }
  return (
    <>
    <Gallery start={index} assets={attachments} active={gallery} onClose={seeGallery}/>
    <Modal onClose={onAddMember} active={addMember} title="Add new member">
      <AddMember/>
    </Modal>
    <Modal onClose={onSetting} active={settingProject} title="Setting project">
      <SettingProject/>
    </Modal>
    <Modal onClose={onAddTask} active={addTask} title="Add new task">
      <AddNewTask/>
    </Modal>
    <Modal onClose={onAddFiles} active={addFiles} title="Add new files">
      <AddFiles/>
    </Modal>
    <Modal onClose={onAddDiscussion} active={addDiscussion} title="Add new discussion">
      <AddDiscussion/>
    </Modal>
    <Modal onClose={onSeeMembers} active={seeMembers} title="All members">
      <SeeMembers members={members}/>
    </Modal>
    <Modal onClose={onSeeTasks} active={seeTasks} title="All tasks">
      <SeeTasks/>
    </Modal>
      <header className="h-[70px] relative">
        <nav className="absolute top-0 left-0 flex justify-between w-full px-4 py-2 text-white z-10">
          <Link to="/home" className="text-2xl"><IoMdArrowRoundBack/></Link>
          <button className="md:hidden" onClick={activeAside}>Setting</button>
        </nav>
        <div className="h-full relative bg-[rgba(0,0,0,0.5)]">
          <img src={APP_ASSETS.cover_2} className="h-full w-full object-cover absolute z-[-1]"
          />
        </div>
      </header>
      <main className="grid md:grid-cols-[1fr,300px] md:gap-3 w-full max-w-[1000px] m-auto py-6 px-2 md:px-4">
        <div className="flex flex-col gap-4">
            <SectionIcon icon={<MdWorkOutline/>} title="Construction de maison">
                <div className="flex gap-3 items-start py-4">
                <DisplayMembers members={members}/>
                <button onClick={onAddMember}>
                  <div className="w-[35px] h-[35px] bg-blue-500 hover:bg-blue-700 transition-all duration-500 rounded-[99px] flex justify-center items-center">
                  <span className="text-[22px] font-bold m-0 p-0 text-white"><MdGroupAdd size={15}/></span>
                  </div>
                  <p className="text-[14px] text-gray-500">Add...</p>
                </button>
                </div>
            </SectionIcon>
            <SectionIcon icon={<TbFileDescription/>} title="Description">
                <Lorem/>
            </SectionIcon>
            <SectionIcon icon={<RiImageAddFill/>} title="Attachments">
                <div className="flex gap-4 my-3">
                <DisplayAttachments tab={attachments} onClick={(i) =>{
                  setIndex(i);
                  seeGallery();
                }}/>
                <button onClick={onAddFiles} className="w-[80px] h-[80px] bg-blue-500 hover:bg-blue-700 transition-all duration-500 flex justify-center items-center text-3xl text-white rounded">
                  <RiImageAddFill/>
                </button>
                </div>
            </SectionIcon>
            <SectionIcon icon={<FaTasks/>} title="Tasks">
               <Task text="Initialise le projet."/>
               <Task text="Ajouter le projet sur github."/>
               <Task text="Heberger le projet sur vercel."/>
               <ButtonIcon onClick={onAddTask} icon={<MdAddTask/>} className="gap-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition-all duration-300">
                Add new task
               </ButtonIcon>
            </SectionIcon>
            <SectionIcon icon={<IoChatboxEllipsesOutline/>} title="Discussions">
                <div className="flex flex-col gap-2 mt-3">
                <Discussions discussions={DISCUSSIONS}/>
                <Discussions discussions={DISCUSSIONS}/>
                <Discussions discussions={DISCUSSIONS}/>
                </div>
                <ButtonIcon icon={<IoChatboxEllipsesOutline size={20}/>} onClick={onAddDiscussion} className="bg-blue-500 rounded text-white my-4 hover:bg-blue-700">
                  Add new discussion
                </ButtonIcon>
            </SectionIcon>
        </div>
        <aside className={`px-2 py-5 fixed right-0 top-0 z-30 w-[300px] md:w-auto bg-white shadow-2xl md:shadow-none h-screen md:h-auto overflow-y-scroll md:block transition-all duration-300 md:relative ${aside ? 'translate-x-[0%]' : 'translate-x-[100%]'} md:translate-x-0`}>
          <div className="flex justify-between">
          <h2 className="font-bold">Add to project</h2>
          <ButtonIcon onClick={activeAside} className="md:hidden" icon={<MdWorkOutline/>}/>
          </div>
          <ButtonAside onClick={onSetting} icon={<IoMdOptions size={20}/>}><p>Settings project</p></ButtonAside>
          <ButtonAside onClick={onAddMember} icon={<MdGroupAdd size={20}/>}><p>Add members</p></ButtonAside>
          <ButtonAside onClick={onAddTask} icon={<MdAddTask size={20}/>}><p>Add new tasks</p></ButtonAside>
          <ButtonAside onClick={onAddFiles} icon={<RiImageAddFill size={20}/>}><p>Add files</p></ButtonAside>
          <ButtonAside onClick={onAddDiscussion} icon={<IoChatboxEllipsesOutline size={20}/>}><p>Add new discussions</p></ButtonAside>
          <h2 className="font-bold">More informations</h2>
          <ButtonAside onClick={onSeeMembers} icon={<HiOutlineUserGroup size={20}/>}><p>See all members</p></ButtonAside>
          <ButtonAside onClick={onSeeTasks} icon={<FaTasks size={20}/>}><p>See all tasks</p></ButtonAside>
          <ButtonAside onClick={seeGallery} icon={<RiImageAddFill size={20}/>}><p>See all files</p></ButtonAside>
        </aside>
      </main>
    </>
  );
};
const DisplayAttachments = ({tab = [],onClick}) =>{
  let assets = [...tab];
  assets.length = 2;
  return assets.map((att,i,_) => <Attachment onClick={() => {onClick(i)}} key={i} src={att.src}/>)
}
/**
 * 
 * @param {{members : members}} param0 
 * @returns 
 */
const DisplayMembers = ({members}) =>{
  const copyMembers = [...members];
  copyMembers.length = 3;
  return copyMembers.map((d,i,_) => {
      return <>
      <Member key={i} text={hiddenText(d.email,4)}/>
    </>
    
  })
}
const ButtonAside = ({children,icon,onClick}) =>{
  const onClickButton = () =>{
    if(onClick){
      onClick();
    }
  }
  return (
    <ButtonIcon onClick={onClickButton} className="w-full bg-[#eee] my-3 rounded hover:bg-blue-700 hover:text-white transition-all duration-200" icon={icon}>
      {children}
    </ButtonIcon>
  )
}
export default Details;