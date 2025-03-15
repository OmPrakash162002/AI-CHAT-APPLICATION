import { FaArrowCircleUp } from "react-icons/fa";
import './textArea.css'

 export const TextAreaField =({handelOnButtonClick,que,set})=>{

  return  <div className="container-fluid"  >

  <textarea className="textContainer" type="text" placeholder="Ask anything" value={que} onChange={(e)=>set((pre)=>({...pre, question: e.target.value})) }/>


  <button style={{borderRadius: "20px"}} className=" button  btn btn-info" onClick={handelOnButtonClick} disabled={!que.trim()} >< FaArrowCircleUp /></button>

  </div>
}