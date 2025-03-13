import { FaEdit } from "react-icons/fa";

export const EditRoom =({input,handleEdit}) =>{
    return (
<div className="editRoom">
   
   <div className="editText">{input}</div>
    <span className="edit">
    <FaEdit onClick={handleEdit}/>
    </span>
</div>

    )
}