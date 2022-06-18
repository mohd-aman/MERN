import { Component } from "react";


class Banner extends Component {
    render() {
        return (
            <div className="card">
                <img src="https://assets.reedpopcdn.com/digitalfoundry-2020-marvels-spider-man-miles-morales-tech-analysis-1604663057480.jpg/BROK/thumbnail/1600x900/quality/100/digitalfoundry-2020-marvels-spider-man-miles-morales-tech-analysis-1604663057480.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        )
    }
}

export default Banner