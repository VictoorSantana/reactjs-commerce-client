import React, { Component } from 'react';

class FolderComponent extends Component {
    render() {
        return (
            <div style={{ width: '110px' }} {... this.props}>
                <img src="/icons/folder.png" className="w-100" alt="imagem de pasta" />
                <p className="text-center text-secondary cut-text mb-0"> {this.props.name} </p>
            </div>
        );
    }
}

export default FolderComponent;