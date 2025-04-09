import { FaArrowCircleUp } from "react-icons/fa";
import './textArea.css'
import { useContext } from "react";
import { AiContext } from "../../store/context";

 export const TextAreaField =()=>{
  
 const{handelOnButtonClick,state,setState}= useContext(AiContext);

  return  <div className="container-fluid"  >

  <textarea className="textContainer" type="text" placeholder="Ask anything" value={state.question} onChange={(e)=>setState((pre)=>({...pre, question: e.target.value})) }/>


  <button style={{borderRadius: "20px"}} className=" button  btn btn-info" onClick={handelOnButtonClick} disabled={!state.question.trim()} >< FaArrowCircleUp /></button>

  </div>
}