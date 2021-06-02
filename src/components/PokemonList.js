import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemons, onImageClick, disable }) => {
  return !disable ? (
    <div>
      { pokemons.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            experience={pokemon.experience}
            onImageClick={onImageClick}
          />
        );
      })
      }
    </div>
  ) : <h1 className='f1'>Please press "Fight" button to see who wins</h1>
}

export default PokemonList;