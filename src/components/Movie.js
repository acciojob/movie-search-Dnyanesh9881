import React from "react";

const Movie=({data})=>{
  console.log(data);
    return(
        <div>
          <h2>{data.Title}</h2>
          <img src={data.Poster} />
        </div>
    )
}

export default Movie;