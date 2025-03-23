import { TiThMenuOutline } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import './sidebar.css'
import { useState } from "react";


function Sidebar({set,sidebarQue, getAnsFunk }) {

  const [showSidebar, setShowSidebar] = useState(false);

  const handelMenuClick =()=>{
    setShowSidebar((pre)=>!pre)
   
  }

  const handelNewChat =()=>{
    localStorage.removeItem("sidebarQue")
    set((pre)=>({
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
   
   getAnsFunk(Quetext)
    
    set((pre)=> ({...pre, answer :"", question: "", input : Quetext, loading : true, captionShow : true}))
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
        
       {sidebarQue.map((val,index)=> <div key={index} onClick={()=>handelQueText(val)} className="queBox">
         < MdOutlineQuestionAnswer></MdOutlineQuestionAnswer>
           <p>{val}</p>
        </div> ) } 
        
       
      
      </div>}
    </div>
  )
}

export default Sidebar
