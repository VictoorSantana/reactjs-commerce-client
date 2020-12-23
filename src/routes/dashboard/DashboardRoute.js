import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardRoute extends Component {
    render() {
        return (
            <div>
                <h1> Hello World </h1>
                <Link to="/produtos"> Produtos Lista </Link>
            </div>
        );
    }
}

export default DashboardRoute;