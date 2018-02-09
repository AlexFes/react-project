import React from 'react';

const Carousel = () => {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"/>

                <li data-target="#carousel" data-slide-to="1"/>

                <li data-target="#carousel" data-slide-to="2"/>
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require("../public/images/DJI_0490.JPG")} alt="First slide" className="d-block img-fluid w-100"/>
                </div>

                <div className="carousel-item">
                    <img src={require("../public/images/DJI_0499.JPG")} alt="Second slide" className="d-block img-fluid w-100"/>
                </div>

                <div className="carousel-item">
                    <img src={require("../public/images/DJI_0500.JPG")} alt="Third slide" className="d-block img-fluid w-100"/>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>

                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>

                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;