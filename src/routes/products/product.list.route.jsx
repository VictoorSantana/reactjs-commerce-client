import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Call from '../../service/calls';

class ProductListRoute extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    };


    componentDidMount = () => {
        this.handleLoadList();
    }

    handleLoadList = () => {

        Call
        .getc('product/')
        .then(response => {
            this.setState({ list: response.data });            
        })
        .catch(error => console.log(error));


        axios
            .get('http://127.0.0.1:5000/api/product/')
            
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <Link to="/produtos/0/form/1">Adicionar</Link>
                <ul>
                    {
                        list.map((result) =>
                            <li> <Link to={`/produtos/${result.id}/form/1`}> (Editar) </Link>  -   </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default ProductListRoute;