import { Component } from "react";


class Fav extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group genre-selector">
                            <li className="list-group-item">Favourites</li>
                            <li className="list-group-item">Action</li>
                            <li className="list-group-item">Action</li>
                            <li className="list-group-item">Comedy</li>
                            <li className="list-group-item">Adventure</li>
                        </ul>
                    </div>
                    <div className="col-9 fav-table">
                        <div className="row">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <input type="number" className="form-control" />
                        </div>                  
                    </div>
                </div>
            </div>
        )
    }
}

export default Fav;