import React from 'react';
import Home from '../pages/Home';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
    <div className="Layout">
        <Header />
        <Home />
        <Footer />
    </div>
);

export default Layout;