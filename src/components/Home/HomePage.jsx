import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth} from "../Login/firebase"; 


const HomePage = () => {
    const currentUser = useAuth(); 

    return (
        <div class="container ">
            <div>  welcome Back: { currentUser?.displayName } </div>
            
            <Col class=".col-12 .col-md-8">
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta debitis repudiandae corporis, impedit culpa, veniam necessitatibus rem placeat in aperiam consectetur ipsum et nostrum quae magnam ab dignissimos amet?</p></Col>
        </div>
    );
}

export default HomePage;