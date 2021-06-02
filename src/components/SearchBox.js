import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--light-yellow bg-yellow'  
        type='search'
        placeholder='search pokemons'
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchBox;