import React from 'react';
import sliderPic1 from '../../../amazon-slider-1.jpg';
import sliderPic2 from '../../../amazon-slider-2.jpg';
import sliderPic3 from '../../../amazon-slider-3.jpg';
import sliderPic4 from '../../../amazon-slider-4.jpg';
import sliderPic5 from '../../../amazon-slider-5.jpg';

const RowTwo = props => (
        <div id="row-two-container" class="carousel slide" data-ride="false">
            <h3>Toys & Games best sellers</h3>
            <div class="carousel-inner">
                <ul>
                    <li class="carousel-item active">
                        <a href="#">
                            <img className="sliderPic d-block w-20" src="https://images-na.ssl-images-amazon.com/images/I/51U8UKVgMAL._AC_SY400_.jpg" alt="First slide" />
                        </a>
                    </li>
                    <li class="carousel-item">
                        <img class="d-block w-20" src="https://images-na.ssl-images-amazon.com/images/I/51doAcdYmUL._AC_SY400_.jpg" alt="Second slide" />
                    </li>
                </ul>
                {/* <div class="carousel-item">
                <a href="#">
                    <img className="sliderPic d-block w-20" src={sliderPic3} alt="Third slide" />
                </a>
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img className="sliderPic d-block w-20" src={sliderPic4} alt="Fourth slide" />
                </a>
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img className="sliderPic d-block w-20" src={sliderPic5} alt="Fourth slide" />
                </a>
            </div> */}
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

export default RowTwo;


