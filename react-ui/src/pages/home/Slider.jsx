import React from 'react';
import sliderPic1 from '../../amazon-slider-1.jpg';
import sliderPic2 from '../../amazon-slider-2.jpg';
import sliderPic3 from '../../amazon-slider-3.jpg';
import sliderPic4 from '../../amazon-slider-4.jpg';
import sliderPic5 from '../../amazon-slider-5.jpg';

const Slider = props => (
    <div id="slider" class="carousel slide" data-ride="carousel" data-interval="5000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="#">
                    <img className="sliderPic d-block w-100" src={sliderPic1} alt="First slide" />
                </a>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={sliderPic2} alt="Second slide" />
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img className="sliderPic d-block w-100" src={sliderPic3} alt="Third slide" />
                </a>
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img className="sliderPic d-block w-100" src={sliderPic4} alt="Fourth slide" />
                </a>
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img className="sliderPic d-block w-100" src={sliderPic5} alt="Fourth slide" />
                </a>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon carousel-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);

export default Slider;


