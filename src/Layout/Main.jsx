import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';

const Main = () => {
    return (
        <div className=''>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;