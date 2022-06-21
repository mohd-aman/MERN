import { Component } from "react";
import {movies} from "../movieData"

class MovieList extends Component{
    render(){
        let moviesArr = movies.results
        return(
            <>
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
            </div>
            <div className="movies-list">
                {moviesArr.map((movieEle)=>(
                    <div className="card movie-card">
                    <img src="https://th.bing.com/th/id/OIP.bgZRya9d6c9saeEppWC1AQHaEK?pid=ImgDet&rs=1" style={{height:'40vh',width:'20vw'}} className="card-img-top movie-img" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{movieEle.original_title}</h5>
                    </div>
                  </div>
                    
                ))}
            </div>
            </>
        )
    }
}

export default MovieList