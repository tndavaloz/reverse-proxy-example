import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { client } from './api/axios';

function App() {
    const [pokemon, setPokemon] = useState([]);

   // GET with Axios
   useEffect(() => {
      const fetchPokemon = async () => {
         let response = await client.get();
         setPokemon(response.data);
      };
      fetchPokemon();
   }, []);

  return (
    <>
        <h1>Calling the proxy</h1>
        <div className="card">
            {pokemon.map((p) => {
                return (
                    <div key={p.id}>
                        <h2>{p.name}</h2>
                        <ul>
                            <li>Type: {p.type}</li>
                            <li>Favorite Move: {p.favoriteMove}</li>
                            <li>Evolved From: {p.evolvedFrom}</li>
                        </ul>
                    </div>
                );
            })}
      </div>
    </>
  )
}

export default App
