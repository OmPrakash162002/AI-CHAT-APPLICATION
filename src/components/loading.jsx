 export const Loading =({lode}) =>{
    return (<>
        {lode &&
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