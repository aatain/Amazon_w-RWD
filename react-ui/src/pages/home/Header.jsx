import React from 'react';
import headerImg from '../../header.png'

const Header = props => (
    <header id="header">

        <nav class="navbar navbar-expand-lg navbar-fixed-top">

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div class="navbar-nav">


                <a className="nav-link" href="#">
                    <img className='headerImg' src={headerImg} />
                </a>            <a className="nav-link" href="#">
                    <img className='headerImg' src={headerImg} />
                </a>            <a class="nav-link" href="#"><strong>NEW AND INTERESTING FEATURES</strong> ON AMAZON</a>
                <button type="button" class="btn btn-dark rounded-0">EXPLORE</button>
                <a className="nav-link" href="#">
                    <img className='headerImg' src={headerImg} />
                </a>
                <a className="nav-link" href="#">
                    <img className='headerImg' src={headerImg} />
                </a>
                <a className="nav-link" href="#">
                    <img className='headerImg' src={headerImg} />
                </a>
                <a className="nav-link" href="#">
                    <img className='headerImg' src={headerImg} />
                </a>

</div> 
            </div>

        </nav>
    </header>
);

export default Header;