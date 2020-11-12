import React, { Component } from 'react';
import ReactPlayer from './react-player';
import VideoPlayer from '../components/VideoPlayer';
import MvPlayerList from '../components/VideoPlayer';

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
