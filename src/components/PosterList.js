import React, { Component } from 'react';

import Poster from './Poster';
import '../css/PosterList.css';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';
const POSTER_SIZE = 'w500';
let wish;

class PosterList extends Component {
    renderPoster = () => {
        return this.props.movies.map(movie => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}` 
            wish = false;
            return (
                <Poster 
                    key={movie.id}
                    imgSrc={imgSrc}
                    wished={wish}
                    movie={movie}
                    mTitle={movie.title}
                    mDesc={movie.overview}

                    />

            )
        })
    }
    render() {
        
        return (
            <div className="posterList">
                <h3 className="posterList--title">NOUVEAUX FILM</h3>
                <div className="posterList--grid">
                    {this.renderPoster()}
                </div>
            </div>
        );
    }z
}

export default PosterList;