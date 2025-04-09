import { useContext } from "react";
import "./Answers.css"
import { AiContext } from "../../store/context";


export const Answers =({answers})=>{

 const {state}= useContext(AiContext);
    return (
      
        <div
        className="AnswerContainer"
        style={{
          minWidth : "240px",
          maxWidth: "70%",
          width: "100%",
          maxHeight: "70vh",
          padding: "20px",
          whiteSpace: "pre-wrap",
          overflowY: "auto",
          textAlign: "left",
          borderRadius: "20px",
        
          
          
        }}
      >{state.answer}
     
      </div>
       
       

      
      
      );
    };
