import React, { Component } from 'react';
import Header from './home/Header.jsx';
import UserInfoPanel from './home/UserInfoPanel.jsx';
import Slider from './home/Slider.jsx';
import ProductsDisplay from './home/ProductsDisplay';
import BackToTopPanel from './home/BackToTopPanel.jsx';
import BottomNavBar from './home/BottomNavBar.jsx';
import Footer from './home/Footer.jsx';

class Home extends Component {
    render() {
        return (
            <div className="Home">
            <Header />
            <UserInfoPanel />
            <Slider />
            <ProductsDisplay />
            <BackToTopPanel />
            <BottomNavBar />
            <Footer />
            </div>
        );
    }
}

export default Home;