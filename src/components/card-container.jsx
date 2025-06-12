import { useState, useEffect } from "react";

const randomPokemon = [
  "bulbasaur",
  "charizard",
  "pikachu",
  "gengar",
  "lucario",
  "snorlax",
  "dragonite",
  "mewtwo",
  "scizor",
  "salamence",
  "gardevoir",
  "infernape",
];

function CardContainer() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const promises = randomPokemon.map(async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        return {
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
        };
      });

      const results = await Promise.all(promises);
      console.log(results);
      setPokemonData(results);
    };
    getPokemon();
  }, []);

  return (
    <div className="cardContainer">
      {pokemonData.map((pokemon) => (
        <div className="card" key={pokemon.name}>
          <img className="img" src={pokemon.image}></img>
          <br />
          <span>{pokemon.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
