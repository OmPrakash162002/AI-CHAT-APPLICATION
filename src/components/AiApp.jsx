import { useState,useRef } from "react";
import axios from "axios";
import { EditRoom } from "./EditRoom/editRoom";
import { Answers } from "./Answers/answer";
import { TextAreaField } from "./text area and button/textAreaField";
import { Loading } from "./loading";
import Sidebar from "./sidebar/sidebar";
import { Caption } from "../caption/Caption";

export const Aiapp =()=>{

 let [state, setState] = useState(()=> {

  const storedSidebarQuestions = localStorage.getItem("sidebarQue");
 
  return {
  question : "",
  answer : "",
  input : "",
  loading : false,
  sidebarQuestions : storedSidebarQuestions ? JSON.parse(storedSidebarQuestions) : [],
  captionShow : false,
  
 }});


 let  getAnswer = async(textQue)=>{

   const response = await axios({
      url : `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`,
      method : "post",
      data : {
  "contents": [{
    "parts":[{"text": textQue}]
    }]
   }
    })

   setState((pre)=> 
    { return {...pre, answer : response["data"]["candidates"][0]["content"]["parts"][0]["text"]}}) 
    
  }

  const addInput =(inputValue)=>{
    setState((pre)=> ({...pre, input :inputValue}));
    

  }

 const handelOnButtonClick =()=>{
  getAnswer(state.question);
  addInput(state.question);
 
    setState((pre)=> {
      localStorage.setItem("sidebarQue", JSON.stringify([...pre.sidebarQuestions,pre.input]))

      return {...pre, question: "",answer: "", loading: true, captionShow: true , sidebarQuestions : [...state.sidebarQuestions, pre.input]}});
    
    
 }

  const handleEditFunk =()=>{
    setState((pre)=>({
      ...pre,
      question : pre.input,
      input : "",
      loading : false

    }))
  }


    
    return ( 
    <div className="mainContainer">
        <Sidebar sidebarQue = {state.sidebarQuestions} set={setState}  getAnsFunk={getAnswer}></Sidebar>
        <div className="all-items">
           
         
         {state.captionShow ? <div className="EditRoom-Answers">
            {state.input  ?<EditRoom input={state.input} handleEdit={handleEditFunk}  ></EditRoom>:null} 

            {state.answer ?<Answers answers = {state.answer}></Answers>:<Loading lode ={state.loading}></Loading>}
            </div>: <Caption></Caption> }
          
      
             <TextAreaField que ={state.question} handelOnButtonClick={handelOnButtonClick} set= {setState}></TextAreaField>  
        </div>
      
        </div>
       )
}