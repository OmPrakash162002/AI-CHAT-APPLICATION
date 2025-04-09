import { FaEdit } from "react-icons/fa";
import "./EditRoom.css"
import { useContext } from "react";
import { AiContext } from "../../store/context";

export const EditRoom =() =>{

   const {state,handleEditFunk}=  useContext(AiContext)
   
    return (

    <div className="edit-container">
<div className="editRoom">
   
   <div className="editText">{state.input}</div>
    <span className="edit">
    <FaEdit onClick={handleEditFunk}/>
    </span>
</div>
</div>
    )
}