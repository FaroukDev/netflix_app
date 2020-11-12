import React, { Component } from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "../components/VideoPlayer";
import MvPlayerList from "../components/VideoPlayer";

import '../css/MoviePlayer.css';

const selectedMovie = {
  duration: "2h 9m",
  id: 429617,
  imageUrl: "https///image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
  postion: 1,
  title: "Spider-man : Far from home",
  videoUrl:
    "http://comondatestorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
};

const movies = [
  {
    duration: "2h 9m",
    id: 429617,
    imageUrl:
      "https///image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    postion: 1,
    title: "Spider-man : Far from home",
    videoUrl:
      "http://comondatestorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    duration: "2h 9m",
    id: 429616,
    imageUrl:
      "https///image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    postion: 1,
    title: "Spider-man : Far from home",
    videoUrl:
      "http://comondatestorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    duration: "2h 9m",
    id: 429615,
    imageUrl:
      "https///image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    postion: 1,
    title: "Spider-man : Far from home",
    videoUrl:
      "http://comondatestorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    duration: "2h 9m",
    id: 429614,
    imageUrl:
      "https///image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    postion: 1,
    title: "Spider-man : Far from home",
    videoUrl:
      "http://comondatestorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    duration: "2h 9m",
    id: 429613,
    imageUrl:
      "https///image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
    postion: 1,
    title: "Spider-man : Far from home",
    videoUrl:
      "http://comondatestorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

export default class MoviePlayer extends Component {
  render() {
    return (
      <div className="moviePlayer">
        <VideoPlayer 
            videoUrl={selectedMovie.videoUrl}
            imageUrl={selectedMovie.imageUrl}
        />
        <MvPlayerList movies={movies} selectedMovie={selectedMovie} />
      </div>
    );
  }
}
