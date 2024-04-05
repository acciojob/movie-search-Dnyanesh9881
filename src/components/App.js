
import React, { useState } from "react";
import './../styles/App.css';
import Movie from "./Movie";


const App = () => {
  const [movie, setMovie]=useState("");
 
  const [movieData, setmovieData]=useState({});
  
  function searchMovies(){
    fetch(`https://www.omdbapi.com/?t=${movie.trim()}&apikey=99eb9fd1`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setmovieData({...data});
      console.log(movieData);
    })
    .catch((error) => {
      console.log( error);
    });
  }
 
  return (
    <div>
      <h1>Search Movies</h1>
       <input type="text" placeholder="Search movies" onChange={(e)=>setMovie(e.target.value)}/>
       <button onClick={()=>searchMovies()}>Search</button>
       {
        movieData==null ? <p className="error">Invalid movie name. Please try again.</p> : <Movie data={movieData}/>
       }
    </div>
  )
}

export default App
