import React, { Component} from 'react';
import Header from './components/Header';
import Home from './routes/Home';


import './App.css';

class App extends Component {

  state = {
    loading: false,
    movies: [
      {
        backdrop_path: "./images/Fast_large.jpg",
        id: 475557,
        overview:
          "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "./images/Fast_small.jpg",
        title: "Joker"
      },
      {
          backdrop_path: "./images/Fast_large.jpg",
          id: 475558,
          overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
          poster_path: "./images/Fast_small.jpg",
          title: "Joker"
        },
        {
          backdrop_path: "./images/Fast_large.jpg",
          id: 475559,
          overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
          poster_path: "./images/Fast_small.jpg",
          title: "Joker"
        },
        {
          backdrop_path: "./images/Fast_large.jpg",
          id: 475560,
          overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
          poster_path: "./images/Fast_small.jpg",
          title: "Joker"
        }
    ],
    badge: 0,
    image: './images/Fast_large.jpg',
    mTitle: "Fast and Furious",
    mDesc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    activePage: 0,
    totalPages: 0,
    searchText: ""
  }

  handleSearch = value => {
    // lancer la recherche 
    console.log('handlesearch', value);
  }


  loadMore = () => {
    console.log('loadMore');
  }
  render() {
     return (
    <div className="App">
      <Header badge={this.state.badge}/>
      <Home 
        {...this.state}
        onSearchClick={this.handleSearch}
        onButtonClick={this.loadMore}
      />
    </div>
  );
}
  }
 

export default App;
