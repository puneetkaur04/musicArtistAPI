import React, {useEffect, useState} from "react";
import "./App.css"

let search = prompt("Please Enter an Artist");

function App() {
  const[songs, setSongs]  = useState([]);

  useEffect(() => {
        const url = `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${search}`

        const fetchData = async() => {
          try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setSongs(json);
          }catch(error){
            console.log(error);
          }
        };
        fetchData();
  }, []);

  return (
    <div className="App">
      {songs.map((song) => {
        return(
          <div>
          <p>Artist: {song.artist.name}</p>
          <p>Title: {song.title} </p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
