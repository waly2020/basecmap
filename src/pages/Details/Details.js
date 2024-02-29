import { useParams } from "react-router-dom";
/*
- name project,
- user e-mail,
- project description,
- button set project data,
  - button add member,
  - set name
  - set description
- button message,
  - create discussion
  - write a message
  - delet discussion
  - delet message
- button delete
  - modal 'want you realy delete this project ?'
*/
const Details = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Details {id}</h1>
        </div>
    );
}

export default Details;