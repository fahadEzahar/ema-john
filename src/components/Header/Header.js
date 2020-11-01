import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="navbar-brand" href="/home">
                    <img class='logo' src={logo} alt="" srcset=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ml-auto  p-4">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/Shop"> Shop <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/review">Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/inventory">Manage Inventory</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;