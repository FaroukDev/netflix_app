import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderImg from '../components/HeaderImg';
import SearchBar from '../components/SearchBar';
import PosterList from '../components/PosterList';
import LoadButton from '../components/LoadButton';

import { getMovies } from '../actions/movie';

class HomeComponent extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        const { mTitle, mDesc, image, movies, loading } = this.props
        return (
            <div>
                <HeaderImg
                    title={mTitle}
                    overview={mDesc}
                    imgSrc={image}
                />
                <SearchBar onSearchClick={this.props.onSearchClick}/>
                <PosterList movies={movies} localMovies={this.props.localMovies}/>
                <LoadButton onButtonClick={this.props.onButtonClick} 
                loading={loading}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        localMovies: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMovies())
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;