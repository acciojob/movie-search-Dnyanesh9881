import React from "react";

const Movie=({data})=>{
  console.log(data);
    return(
        <div>
          <ul>
             <li>
             <h2>{data.Title}</h2>
            <img src={data.Poster} />
             </li>
          </ul>
         
        </div>
    )
}

export default Movie;