import React, { useState,useEffect } from 'react'

export default function Sample() {
    const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);
  const getJoke = async () => {
    setLoading(true);
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJoke(data);
    setLoading(false);
  };
  const handleClick = async () => {
    setLoading(true);
    await getJoke();
  };
  return (
    <div>
        <button onClick={handleClick}>Generate Joke</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </>
      )}
    </div>
  )
}
