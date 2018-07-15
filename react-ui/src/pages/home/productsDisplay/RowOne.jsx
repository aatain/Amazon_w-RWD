import React from 'react';

const RowOne = props => (
    <div className="row row-one-container">
        <div className="card-deck">
            <div className="card rounded-0">
                <div className="card-body text-left">
                    <h5 className="card-title">Card title</h5>
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/G/01/Gateway/Grocery_Spices-2X._CB475626020_SY520_.jpg" alt="Card image cap" />
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card rounded-0">
                <div className="card-body text-left">
                    <h5 className="card-title">Card title</h5>
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51-ARS4IQqL._SY520_.jpg" alt="Card image cap" />
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card rounded-0">
                <div className="card-body text-left">
                    <h5 className="card-title">Card title</h5>
                    <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/G/01/Gateway/Home_Rivet-2X._CB475620713_SY520_.jpg" alt="Card image cap" />
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
);

export default RowOne;