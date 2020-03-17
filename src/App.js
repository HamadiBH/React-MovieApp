import React from 'react';
import './App.css';
import Searchbar from './components/searchbar';
import Moviecards from './components/moviescards';







class Movieapp extends React.Component {

  state = {

    movies: [
      {rating:'4', img:'https://media.senscritique.com/media/000012652206/150/The_Thing.jpg', name:'The Thing (1982)', director:'John Carpenter'},
      {rating:'3', img:'https://media.senscritique.com/media/000012034560/150/Kung_Fury.jpg', name:'Kung Fury (2015)', director:'David Sandberg'},
      {rating:'5', img:'https://media.senscritique.com/media/000013405135/150/Reservoir_Dogs.png', name:'Reservoir Dogs (1992)', director:'Quentin Tarantino'},
      {rating:'3', img:'https://media.senscritique.com/media/000012816185/150/Shaun_of_the_Dead.jpg', name:'Shaun of the Dead (2004)', director:'Edgar Wright'},
      {rating:'4', img:'https://media.senscritique.com/media/000017468164/150/Grindhouse.jpg', name:'Grindhouse (2007)', director:'Robert Rodriguez, Quentin Tarantino, Rob Zombie...'},
      {rating:'5', img:'https://media.senscritique.com/media/000018887384/160/The_Devil_s_Rejects.jpg', name:'The Devil\'s Rejects (2005)', director:'Rob Zombie'},
    ],
    
      search: '',
      rating: 1,
}


  handleSearch = inputValue => this.setState({ search:inputValue });

  handleChangeRating =(rate) =>{
    this.setState({
      rating: rate
    })
  }

  render() {
  return (
    <div className="App">

      <Searchbar handleSearch={this.handleSearch} count={this.state.rating} handleChangeRating={this.handleChangeRating}/>
      <Moviecards movies={this.state.movies.filter(movie =>movie.name.toLowerCase().includes(this.state.search.toLowerCase().trim()) && movie.rate >= this.state.rating)} />
    </div>
  );
}
}

export default Movieapp;
