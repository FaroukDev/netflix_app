import React, { Component } from 'react';
import HeaderImg from '../components/HearderImg';
import SearchBar from '../components/SearchBar';
import PosterList from '../components/PosterList';
import LoadButton from '../components/LoadButton';

class Home extends Component {
    render() {
        const { mTitle, mDesc, image, movies, loading} = this.props
        return (
            <div>
                <HeaderImg
                    title={mTitle}
                    overview={mDesc}
                    imgSrc={image}
                />
                <SearchBar onSearchClick={this.props.onSearchClick}/>
                <PosterList movies={movies} />
                <LoadButton onButtonClick={this.props.onButtonClick} 
                loading={loading}/>
            </div>
        );
    }
}

export default Home;