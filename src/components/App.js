
import React, { useState } from "react";
import './../styles/App.css';
import Movie from "./Movie";


const App = () => {
  const [movie, setMovie]=useState("");
 
  const [movieData, setmovieData]=useState([]);
  
  function searchMovies(e){
       e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${movie.trim()}&apikey=99eb9fd1&page=1`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setmovieData([...data.Search]);
      console.log(movieData);
    })
    .catch((error) => {
      console.log( error);
    });
  }
 
  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={(e)=>searchMovies(e)}>
      <input type="text" placeholder="Search movies" onChange={(e)=>setMovie(e.target.value)}/>
       <button type="submit">Search</button>
      </form>
      
       {
        movieData.length==0? <p className="error">Invalid movie name. Please try again.</p> : movieData.map((item)=>{
          return <Movie data={item}/>
        })
       }
    </div>
  )
}

export default App
