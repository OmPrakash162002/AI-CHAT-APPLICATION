import { useContext } from "react"
import { AiContext } from "../store/context"

 export const Loading =() =>{

  const{state} =  useContext(AiContext);
  
    return (<>
        {state.loading &&
        <div className="loading">
             <div className="spinner-grow text-light" role="status">
  <span className="visually-hidden"></span>
  <div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden"></span>
</div>

</div>
        </div>
       } 
</>
    )
}