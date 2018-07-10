import React from 'react';
import SearchBox from './userInfoPanel/SearchBox.jsx';
import echo from "../../echo.jpg";

const UserInfoPanel = props => (
    <div className="container-fluid amazon-colors" id="userInfoPanel">
        <div className="row row-1">
            <a className="col-2" href="https://www.amazon.com/amazonprime?_encoding=UTF8&ref_=nav_logo_prime_join">Amazon</a>
            <SearchBox  className="col-7" />
            <a className="col-3" href="#">
              <img className="echo content-right" src={echo} alt="" />
            </a>
        </div>
        <div className='row row-2'>
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#">Disabled</a>
            <a className="nav-link disabled" href="#">Disabled</a>
            <a className="nav-link offset-md-3" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#">Disabled</a>
            <a className="nav-link disabled" href="#">Disabled</a>
            <a className="nav-link disabled" href="#">Disabled</a>
        </div>
    </div>
);

export default UserInfoPanel;

