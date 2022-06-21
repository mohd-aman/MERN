import { Component } from "react";
import {movies} from "../movieData"

class Banner extends Component {
    render() {
        let movie = movies.results[Math.floor(Math.random() * 10) ];
        let backdrop_path = movie.backdrop_path;
        return (
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                <h1 className="card-title banner-title">{movie.title}</h1>
                <p className="card-text banner-text">{movie.overview}</p>
            </div>
        )
    }
}

export default Banner