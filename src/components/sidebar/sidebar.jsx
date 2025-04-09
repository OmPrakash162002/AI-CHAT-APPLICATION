import { TiThMenuOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import './sidebar.css'
import { useContext, useState } from "react";
import { AiContext } from "../../store/context";


function Sidebar() {

 const {state,getAnswer, setState}= useContext(AiContext);

  const [showSidebar, setShowSidebar] = useState(false);

  const handelMenuClick =()=>{
    setShowSidebar((pre)=>!pre)
   
  }

  const handelNewChat =()=>{
    localStorage.removeItem("sidebarQue")
    setState((pre)=>({
      ...pre,
      question : "",
      input : "",
      answer : "",
      loading : false,
      sidebarQuestions : [],
      captionShow :false
    }))
  }

  const handelQueText =(Quetext)=>{
   
   getAnswer(Quetext)
    
    setState((pre)=> ({...pre, answer :"", question: "", input : Quetext, loading : true, captionShow : true}))
    setShowSidebar((pre)=>!pre)
     
  }

  return (
    <div className="sidebar">
      <div className="menu"><TiThMenuOutline onClick={handelMenuClick}></TiThMenuOutline></div>

      <div  onClick={handelNewChat} className="newChat">
      <FaPlus></FaPlus> 
     {showSidebar? <p>New Chat</p>:null} 
      </div>
      {showSidebar && <div className="Recent">

        <p className="res" style={{color:"white"}}>Recent</p>
        
       {state.sidebarQuestions.map((val,index)=> <div key={index} onClick={()=>handelQueText(val)} className="queBox">
         < MdOutlineQuestionAnswer></MdOutlineQuestionAnswer>
           <p>{val}</p>
        </div> ) } 
        
       
      
      </div>}
    </div>
  )
}

export default Sidebar
