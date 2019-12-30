import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to="/">
                        <img src="https://scontent.flpb1-1.fna.fbcdn.net/v/t1.0-9/200338_197616853603774_6218716_n.jpg?_nc_cat=105&_nc_ohc=2sYs1-StdbgAQnysu7K62dtlXvtSklPSUTb7G0LFCci2-7u9cQkehP7SA&_nc_ht=scontent.flpb1-1.fna&oh=a71601c87ffffc41009b59d140d3d36d&oe=5E672BB9" alt="SPAT"/>
                    </Link>
                    <h1>Sociedad Protectora de Animales</h1>
                </div>
                <div className="Header-nav">
                    <Nav />
                </div>
            </div>
        </div>
    </div>
);

export default Header;