import React, { Component } from 'react';
import PokemonList from '../components/PokemonList';
import SearchBox from '../components/SearchBox';
import Fight from '../components/Fight';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: '',
      selectedForFight: [],
      fightResult: ''
    }
  }

  componentDidMount() {
    let array = [];
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(respone => respone.json())
      .then(data => {
        data.results.forEach((pokemon, index) => {
          const { name } = pokemon;
          const tempPokemon = {
            name: name,
            id: index + 1,
            experience: Math.floor(Math.random() * (100 - 1) + 1)
          };
          array.push(tempPokemon);
        })
        this.setState({ pokemons: array })
      })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  filterPokemons = () => {
    const { pokemons, searchField } = this.state;
    return pokemons.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    })
  }

  onImageClick = (click) => {
    const { selectedForFight } = this.state;
    let array = [...selectedForFight];
    const { pokemons } = this.state;
    const tempArray = pokemons.filter(pokemon => pokemon.id === parseInt(click.target.id))
    array=[...tempArray,...array];
    this.setState({ selectedForFight: array });
  }

  onFight = () => {
    const { selectedForFight } = this.state;
    if(selectedForFight[0].experience > selectedForFight[1].experience) {
      this.setState({ fightResult: selectedForFight[0].name })
    } else {
      this.setState({ fightResult: selectedForFight[1].name })
    }
  }

  onReset = () => {
    window.location.reload();
  }

  render() {
    const { pokemons, selectedForFight, fightResult } = this.state;
    let disable = selectedForFight.length === 2 ? true : false;
    let finalResult = fightResult ? true : false

    if(finalResult) {
      return (
        <div className='tc'>
          <h1 className='f1'>Pokemons</h1>
          <h1>The winer is {fightResult}</h1>
          <button
            className='br3 f4 link dim ph3 pv2 mb2 dib white pa3 ba b--light-yellow bg-blue'
            onClick={this.onReset}
          >
            Try again
          </button>
        </div>
      )
    }
    return !pokemons.length ? <h2>Loading...</h2>
      :
      (
        <div className='tc'>
          <h1 className='f1'>Pokemons</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Fight 
            disable={disable}
            onFight={this.onFight}
          />
          <PokemonList
            pokemons={this.filterPokemons()}
            onImageClick={this.onImageClick}
            disable={disable}
          />
        </div>
      )
  }

}

export default App;
