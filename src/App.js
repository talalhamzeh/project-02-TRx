import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// to get the result from the input we use useref 
import { useRef, useState } from "react";
import { signup, login ,logout ,useAuth} from "./components/Login/firebase"; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from "./components/Banner";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import Navbar from "./components/Home/Navbar2";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  return (
    <div class="main">
        <Row>
        <Col class=".col-12"><Banner /></Col>
        <Col class=".col-6"><Navbar /></Col>
        </Row>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Switch>
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

