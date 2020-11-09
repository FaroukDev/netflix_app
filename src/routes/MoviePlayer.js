import React, { Component } from 'react';
import ReactPlayer from './react-player';

export default class MoviePlayer extends Component {
    render() {
        return (
            <div className="moviePlayer">
                <VideoPlayer/>
                <MvPlayerList/>
            </div>
        )
    }
}
