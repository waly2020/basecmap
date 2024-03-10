import { Link, useParams } from "react-router-dom";
import { APP_ASSETS } from "../../utils/assets";
import TitleIcon from "../../components/TitleIcon";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillAccountBook } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import SectionIcon from "../../components/sections/SectionIcon";
import Lorem from "../../components/Lorem";
import { hiddenText, placeholer } from "../../utils/functions";
import Member from "../../components/members/Member";
import { attachments, members } from "../../utils/datas";
import Attachment from "../../components/Attachment";
import Gallery from "../../components/Gallery/Gallery";
import { useState } from "react";
/*
- name project,
- user e-mail,
- project description,
- Discussions,
- Messages,
- Tasks,
- Files project,
- button set project data,
  - button add member,
  - set name,
  - set description,
- button message,
  - create discussion
  - write a message
  - delet discussion
  - delet message
- button delete
  - modal 'want you realy delete this project ?'
*/

const Details = () => {
  const [gallery,setGallery] = useState(false);
  const [index,setIndex] = useState(0);
  const seeGallery = () =>{
    setGallery(!gallery);
  }
  return (
    <>
    <Gallery start={index} assets={attachments} active={gallery} onClose={seeGallery}/>
      <header className="h-[100px] relative">
        <nav className="absolute top-0 left-0 flex justify-between w-full px-4 py-2 text-white z-10">
          <Link to="/" className="text-2xl"><IoMdArrowRoundBack/></Link>
          <button>Setting</button>
        </nav>
        <div className="h-full relative bg-[rgba(0,0,0,0.5)]">
          <img src={APP_ASSETS.cover_2} className="h-full w-full object-cover absolute z-[-1]"
          />
        </div>
      </header>
      <main className="grid grid-cols-[1fr,300px] gap-3 w-full max-w-[1000px] m-auto py-6 px-4">
        <div className="flex flex-col gap-4">
            <SectionIcon icon={<MdWorkOutline/>} title="Construction de maison">
                <div className="flex gap-3 items-start py-4">
                {members.map((d,i,_) => {
                  if(i < 6){
                    return <>
                    <Member key={i} text={hiddenText(d.email,4)}/>
                  </>
                  }
                  
                })}
                <button>
                  <div className="w-[35px] h-[35px] bg-gray-200 rounded-[99px] flex justify-center items-center">
                  <span className="text-[22px] font-bold m-0 p-0 text-gray-500">+</span>
                  </div>
                  <p className="text-[14px] text-gray-500">Add...</p>
                </button>
                </div>
            </SectionIcon>
            <SectionIcon icon={<MdWorkOutline/>} title="Description">
                <Lorem/>
            </SectionIcon>
            <SectionIcon icon={<MdWorkOutline/>} title="Attachments">
                <div className="flex gap-4 my-3">
                <DisplayAttachments tab={attachments} onClick={(i) =>{
                  setIndex(i);
                  seeGallery();
                }}/>
                <button className="w-[100px] h-[100px] bg-gray-200 text-3xl text-gray-600">
                  +
                </button>
                </div>
            </SectionIcon>
            <SectionIcon icon={<MdWorkOutline/>} title="Tasks">
                <Lorem/>
            </SectionIcon>
            <SectionIcon icon={<MdWorkOutline/>} title="Discussions">
                <Lorem/>
            </SectionIcon>
        </div>
        <aside></aside>
      </main>
    </>
  );
};
const DisplayAttachments = ({tab = [],onClick}) =>{
  let assets = [...tab];
  assets.length = 2;
  return assets.map((att,i,_) => <Attachment onClick={() => {onClick(i)}} key={i} src={att.src}/>)
}
export default Details;