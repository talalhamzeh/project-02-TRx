import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div class="main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta debitis repudiandae corporis, impedit culpa, veniam necessitatibus rem placeat in aperiam consectetur ipsum et nostrum quae magnam ab dignissimos amet?</p>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default HomePage;