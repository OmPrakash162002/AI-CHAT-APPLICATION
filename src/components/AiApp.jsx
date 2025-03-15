import { useState,useRef } from "react";
import axios from "axios";
import { EditRoom } from "./EditRoom/editRoom";
import { Answers } from "./Answers/answer";
import { TextAreaField } from "./text area and button/textAreaField";
import { Loading } from "./loading";

export const Aiapp =()=>{
 
 let [state, setState] = useState({
  question : "",
  answer : "",
  input : "",
  loading : false,
 });

 let  getAnswer = async()=>{
  console.log("loading...")

   const response = await axios({
      url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD5nzabjlYV3JMzzBvVs2rDcWQ2ox-f_Sc",
      method : "post",
      data : {
  "contents": [{
    "parts":[{"text": state.question}]
    }]
   }
    })

   setState((pre)=> 
    { return {...pre, answer : response["data"]["candidates"][0]["content"]["parts"][0]["text"]}}) 
    
  }

  const addInput =(inputValue)=>{
    setState((pre)=> ({...pre, input : inputValue}));
    

  }

 const handelOnButtonClick =()=>{
    getAnswer();
    addInput(state.question);
    setState((pre)=> ({...pre, question: "", answer: "",loading: true}));

 }

  const handleEditFunk =()=>{
    setState((pre)=>({
      ...pre,
      question : pre.input,
      input : "",
      loading : false

    }))
  }
    
    return ( <>
    <div className="mainContainer">
        <h1 style={{color: "black"}}>AI CHAT APP</h1>

        {state.input && <EditRoom input={state.input} handleEdit={handleEditFunk}  ></EditRoom>} 
        
        {state.answer ?<Answers answers = {state.answer}></Answers>:<Loading lode ={state.loading}></Loading>}

        <TextAreaField que ={state.question} handelOnButtonClick={handelOnButtonClick} set= {setState}></TextAreaField>

      
      
        </div>
       </>)
}