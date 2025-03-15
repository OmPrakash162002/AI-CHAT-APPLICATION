import "./Answers.css"


export const Answers =({answers})=>{
    return (
      
        <div
        className="AnswerContainer"
        style={{
          maxWidth: "80%",
          width: "100%",
          maxHeight: "70vh",
          padding: "20px",
          whiteSpace: "pre-wrap",
          overflowY: "auto",
          textAlign: "left",
          borderRadius: "20px",
        }}
      >{answers}
     
      </div>
       
       

      
      
      );
    };
