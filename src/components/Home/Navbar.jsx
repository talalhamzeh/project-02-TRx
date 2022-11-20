import React from 'react';
import { Link } from 'react-router-dom';
import {Nav} from "react-bootstrap";

const Navbar = () => {
    return (
        <div class="wrapper d-flex align-items-stretch">
            <nav id="sidebar" class="active">
            <h1>Navbar.</h1>
            <ul class="list-unstyled components mb-5">
                <li class="active">
                    <a href="../login"><span class="fa fa-user"></span> Home</a>
                </li>
                <li>
                    <a href="#"><span class="fa fa-user"></span> About</a>
                </li>
                <li>
                    <a href="#"><span class="fa fa-sticky-note"></span> Blog</a>
                </li>
                <li>
                    <a href="#"><span class="fa fa-cogs"></span> Services</a>
                </li>
                <li>
                    <a href="#"><span class="fa fa-paper-plane"></span> Contacts</a>
                </li>
            </ul>

        </nav>
        </div>
    );
}

export default Navbar;
