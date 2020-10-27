import React, { Component} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Home from './routes/Home';


import './App.css';
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '26871ee4ec4ed58969ff8819cfeff30b';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

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

  async componentDidMount() {
    try {
      const { data : { results, page, total_pages}} = await this.loadMovies();
      console.log('res', results);
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview

      })
    } catch(e){
      console.log('e', e);
    }
  }
 
  loadMovies = () => {
    const page = this.state.activePage + 1
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr}`;
    return axios.get(url)
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
