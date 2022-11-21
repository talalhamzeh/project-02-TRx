import React from 'react';
import { Link } from 'react-router-dom';
import {Button, ButtonGroup, Nav} from "react-bootstrap";
import { logout ,useAuth} from "../Login/firebase"; 
import { useRef, useState } from "react";
import { useHistory } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth(); 
  const history = useHistory();

      
  async function handleLogout() {

    await logout();
    setLoading(false);
    history.push("/login")
  }
  if (currentUser){
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>Home</Link>
                </li>
                <li className="nav-item">
                  <a className="right" href="#logout"  onClick={handleLogout}  >Logout</a>
                </li>
               
              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  else { 
    return(
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand">
                TRx
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}> Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/signup'}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar;

// sophia's navbar 

// <div class="wrapper d-flex align-items-stretch">
// <nav id="sidebar" class="active">
// <h1>Navbar.</h1>
// <ul class="list-unstyled components mb-5">
//     <li class="active">
//         <a href="#"><span class="fa fa-user"></span> Home</a>
//     </li>
//     <li>
//         <a href="#"><span class="fa fa-user"></span> About</a>
//     </li>
//     <li>
//         <a href="#"><span class="fa fa-sticky-note"></span> Blog</a>
//     </li>
//     <li>
//         <a href="#"><span class="fa fa-cogs"></span> Services</a>
//     </li>
//     <li>
//         <a href="#"><span class="fa fa-paper-plane"></span> Contacts</a>
//     </li>
// </ul>

// </nav>
// </div>