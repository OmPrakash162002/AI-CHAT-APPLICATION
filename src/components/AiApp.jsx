import { useContext } from "react";
import { EditRoom } from "./EditRoom/editRoom";
import { Answers } from "./Answers/answer";
import { TextAreaField } from "./text area and button/textAreaField";
import { Loading } from "./loading";
import Sidebar from "./sidebar/sidebar";
import { Caption } from "../caption/Caption";
import { AiContext } from "../store/context";


export const Aiapp =()=>{


   const {state} = useContext(AiContext);
 
    return ( 
      
    <div className="mainContainer">
        <Sidebar></Sidebar>
        <div className="all-items">
   
         {state.captionShow ? <div className="EditRoom-Answers">
            {state.input  ?<EditRoom></EditRoom>:null} 

            {state.answer ?<Answers></Answers>:<Loading></Loading>}
            </div>: <Caption></Caption> }
         
             <TextAreaField></TextAreaField>  
        </div>
      
        </div>
      
       )
}