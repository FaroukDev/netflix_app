import React, { Component } from 'react';
import Poster from './Poster';
import '../css/PosterList.css';
let wish;

class PosterList extends Component {
    renderPoster = () => {
        return this.props.movies.map(movie => {
            const imgSrc = movie.poster_path;
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