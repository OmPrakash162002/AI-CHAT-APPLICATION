import { FaEdit } from "react-icons/fa";
import "./EditRoom.css"

export const EditRoom =({input,handleEdit}) =>{
    return (

    <div className="edit-container">
<div className="editRoom">
   
   <div className="editText">{input}</div>
    <span className="edit">
    <FaEdit onClick={handleEdit}/>
    </span>
</div>
</div>
    )
}