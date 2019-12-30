import React from 'react';
import Home from '../pages/Home';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Layout = props => (
    <div className="Layout">
        <Header />
        <Home />
        <Footer />
    </div>
);

export default Layout;