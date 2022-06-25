import { Component } from "react";
import { movies } from '../movieData'


class Fav extends Component {

    render() {
        const moviesArr = movies.results
        console.log(moviesArr)
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let tempArr = [];
        tempArr.push("All genres")
        moviesArr.map((movieObj)=>{
            if(!tempArr.includes(genreIds[movieObj.genre_ids[0]])){
                tempArr.push(genreIds[movieObj.genre_ids[0]])
            }
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group genre-selector">
                            {
                                tempArr.map((genre)=>(
                                    <li className="list-group-item">{genre}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-9 fav-table">
                        <div className="row">
                            <input type="text" className="form-control col" placeholder="Search" />
                            <input type="number" className="form-control col" />
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    moviesArr.map((movieEle) => (
                                        <tr>
                                            <th scope="row"><img style={{ width: "8rem", padding: "1rem" }} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} />{movieEle.title}</th>
                                            <td>{genreIds[movieEle.genre_ids[0]]}</td>
                                            <td>{movieEle.popularity}</td>
                                            <td>{movieEle.vote_average}</td>
                                            <td><button type="button" className="btn btn-danger">Danger</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fav;