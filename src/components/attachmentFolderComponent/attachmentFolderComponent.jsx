import React, { Component } from 'react';
import FolderComponent from '../folderComponent/folderComponent';

class AttachmentFolderComponent extends Component {
    render() {
        return (
            <>

                <div className="col-md-12">
                    <button type="button" className="btn btn-link"> <i className="fas fa-asterisk d-inline-block"></i> <p className="d-none d-sm-inline-block mb-0">Novo Arquivo</p> </button>
                </div>
                <div className="col-md-7">

                    <FolderComponent name="Teste">  </FolderComponent>

                </div>
                <div className="border-left col-md-5">

                </div>

            </>
        );
    }
}

export default AttachmentFolderComponent;