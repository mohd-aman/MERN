import { Component } from "react";


class Banner extends Component {
    render() {
        return (
            <div className="card banner-card">
                <img src="https://assets.reedpopcdn.com/digitalfoundry-2020-marvels-spider-man-miles-morales-tech-analysis-1604663057480.jpg/BROK/thumbnail/1600x900/quality/100/digitalfoundry-2020-marvels-spider-man-miles-morales-tech-analysis-1604663057480.jpg" className="card-img-top banner-img" alt="..."/>
                <h1 className="card-title banner-title">Spider-Man Miles Morale</h1>
                <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        )
    }
}

export default Banner