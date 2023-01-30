import React, { useState , useEffect } from 'react'

export default function Jokes() {
    const [Joke ,setJoke] = useState([])
    let GetJoke = async()=> {
        let url = "https://official-joke-api.appspot.com/random_joke"
        let data = await fetch(url)
        let parsedData = await data.json()
        setJoke(parsedData)
    }
    useEffect(()=> {
      GetJoke();
  },[]);
  const handleClick = async () => {
    await GetJoke();
  };
  return (
    <div>
      
      <h1>{Joke.setup}</h1>
      <h1>{Joke.punchline}</h1>
      <button onClick={handleClick}>Jokeee</button>
    </div>
  )
}
