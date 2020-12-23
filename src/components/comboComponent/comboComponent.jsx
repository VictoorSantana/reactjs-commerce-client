import React, { Component } from 'react';

class ComboComponent extends Component {
    render() {

        const { options, label } = this.props;
        return (
            <>
                <select className="form-control" {...this.props}>
                    {
                        options.map((option, index) => 
                            <option value={option[label[0]]} key={index}>{option[label[1]]}</option>
                        )
                    }
                </select>
            </>
        );
    }
}

export default ComboComponent;