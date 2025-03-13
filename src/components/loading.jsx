 export const Loading =({lode}) =>{
    return (<>
        {lode && <div className="spinner-grow text-light" role="status">
  <span className="visually-hidden"></span>
  <div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden"></span>
</div>

</div>} 
</>
    )
}