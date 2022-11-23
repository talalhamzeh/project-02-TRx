import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// to get the result from the input we use useref
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import HomePage from "./components/Home/HomePage";
import CombinedPrescription from "./components/Prescriptions/CombinedPrescription";
import LoginPage from "./components/Login/LoginPage";
import SideNavbar from "./components/Home/SideNavbar";
import Navbar from "./components/Home/Navbar";
import MedicationIndex from "./components/Medication/MedicationIndex";
import Journals from "./components/Journals/Journals";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './components/Login/Login';
import Signup from './components/Login/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import UpdatePrescription from './components/Prescriptions/UpdatePrescription';
import IndexDisplay from './components/Prescriptions/IndexDisplay';
import CreateMedication from "./components/Medication/CreateMedication";



export default function App() {
  return (

    <Router>
      <Navbar />
      <Row>
        <Col><SideNavbar /></Col>
        <Col>
          <div className="auth-wrapper">
          <Banner />
            <div className="auth-inner">
            <Switch>
              <Route exact path="/journals" component={Journals} />
            </Switch>
            <Switch>
              <Route exact path="/prescriptions" component={CombinedPrescription} />
            </Switch>
            <Switch>
              <Route exact path="/medications" component={MedicationIndex} />
            </Switch>
            <Switch>
              <Route exact path="/medications/new" component={CreateMedication} />
            </Switch>
            <Switch>
              <Route exact path="/home" component={HomePage} />
            </Switch>
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
            <Switch>
              <Route path="/signup" component={Signup} />
            </Switch>
            </div> 
          </div> 
        </Col>
      </Row>
    <div>
    </div>
    </Router>
  )
}
