import { createContext, useState } from "react";
import axios from "axios";

export const AiContext = createContext();

export const ContextProvider =({children})=>{

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

   const contexValues ={
        state,
        setState,
        getAnswer,
        addInput,
        handelOnButtonClick,
        handleEditFunk,
    
    }

    return <>
    <AiContext.Provider value={contexValues}>{children}</AiContext.Provider>
    </>
}