import React, { Component } from 'react';

class CheckboxComponent extends Component {



    render() {
        return (
            <>
                <input type="hidden" name={this.props.name} />
                {
                    this.props.value ?
                        (<button type="button" className="btn btn-success" onClick={() => this.props.move(true)}> <i className="fas fa-check"></i> {this.props.label[1]} </button>) :
                        (<button type="button" className="btn btn-light" onClick={() => this.props.move(false)}> <i className="fas fa-times"></i> {this.props.label[0]} </button>)
                }
            </>
        );
    }
}

export default CheckboxComponent;