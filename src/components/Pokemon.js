import React from 'react';

const Pokemon = ({name, experience, id, onImageClick}) => {
  return(
    <div className="tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5 b--solid b--blue link">
      <img 
        id={id}
        alt="pokemon" 
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} 
        width="200px"
        height="200px"
        onClick={onImageClick}
        />
      <div>
        <h2>{name}</h2>
        <p>Experience: {experience}</p>
      </div>
    </div>
  );
}

export default Pokemon;