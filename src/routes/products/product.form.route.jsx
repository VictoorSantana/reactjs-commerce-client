
import React, { Component } from 'react';
import AttachmentFolderComponent from '../../components/attachmentFolderComponent/attachmentFolderComponent';
import CheckboxComponent from '../../components/checkboxComponent/checkboxComponent';
import ComboComponent from '../../components/comboComponent/comboComponent';

import Call from '../../service/calls';
import { FilterNumber, FilterDecimal } from '../../service/form';

const buttonTab = [
    { icon: 'far fa-question-circle', label: 'Sobre', display: 1 },
    { icon: 'fas fa-hand-holding-usd', label: 'Valores', display: 2 },
    { icon: 'fas fa-paperclip', label: 'Anexos', display: 3 },
    { icon: 'fas fa-clipboard-list', label: 'Detalhes', display: 4 },
];

class ProductFormRoute extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
            display: 2,

            fieldIdProduct: 0,
            fieldCategory: 0,
            fieldBrand: 0,
            fieldTitle: '',
            fieldDesc: '',
            fieldStatus: false,

            fieldUnits: 0,
            fieldUnitBuy: 0,
            fieldUnitSell: 0,
            fieldLoss: 0,
        }
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const { error, data } = await Call.postEvent('product/', e);
        if (error) {
            this.setState({ error: JSON.stringify(data) });
        }
    }

    render() {

        const { display } = this.state;

        const totalGain = this.state.fieldUnits * (this.state.fieldUnitSell - this.state.fieldUnitBuy - this.state.fieldLoss);

        return (
            <form onSubmit={this.handleSubmit} className="container pt-3">

                <div className="row border bg-white pt-2 pb-1 mb-1">
                    <div className="col-md-12 text-center">
                        {
                            buttonTab.map((button) =>
                                <button
                                    key={button.display}
                                    type="button"
                                    onClick={() => this.setState({ display: button.display })}
                                    className={`btn btn-link ${display !== button.display ? 'text-secondary' : ''}`}>
                                    <i className={button.icon}></i> <p className="d-none d-sm-block mb-0">{button.label}</p>
                                </button>
                            )
                        }
                    </div>
                </div>

                {
                    this.state.display === 1 ? (
                        <div className="row border bg-white pt-2 mb-1">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Categoria </label>
                                    <ComboComponent
                                        onChange={(e) => this.setState({ fieldCategory: e.target.value })}
                                        options={[{ id: '1', name: 'Mouse' }, { id: '2', name: 'Teclado' }]}
                                        label={['id', 'name']}
                                    ></ComboComponent>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Marca </label>
                                    <ComboComponent
                                        onChange={(e) => this.setState({ fieldBrand: e.target.value })}
                                        options={[{ id: '1', name: 'Teste' }, { id: '2', name: 'Teste 2' }]}
                                        label={['id', 'name']}
                                    ></ComboComponent>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Título </label>
                                    <input
                                        value={this.state.fieldTitle}
                                        type="text"
                                        onChange={(e) => this.setState({ fieldTitle: e.target.value })}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Descrição </label>
                                    <textarea
                                        value={this.state.fieldDesc}
                                        onChange={(e) => this.setState({ fieldDesc: e.target.value })}
                                        className="form-control"
                                        rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                    ) : ('')
                }

                {
                    this.state.display === 2 ? (
                        <div className="row border bg-white pt-2 mb-1">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Quantidade </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        min={0}
                                        value={this.state.fieldUnits}
                                        onChange={(e) => this.setState({ fieldUnits: FilterNumber(e) })} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Valor Compra Unitário </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        min={0}
                                        value={this.state.fieldUnitBuy}
                                        onChange={(e) => this.setState({ fieldUnitBuy: FilterDecimal(e) })} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Valor Venda Unitário </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        min={0}
                                        value={this.state.fieldUnitSell}
                                        onChange={(e) => this.setState({ fieldUnitSell: FilterDecimal(e) })} />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Prejuizos </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        min={0}
                                        value={this.state.fieldLoss}
                                        onChange={(e) => this.setState({ fieldLoss: FilterDecimal(e) })} />
                                    <small className="text-muted"> Ex.: frete, perda ...   </small>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label className="d-block h6 mb-0"> Lucro total </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        min={0}
                                        readOnly
                                        value={(totalGain).toFixed(2)} />
                                </div>
                            </div>
                        </div>
                    ) : ('')
                }

                {
                    this.state.display === 3 ? (
                        <div className="row border bg-white pt-2 mb-1">
                            <AttachmentFolderComponent></AttachmentFolderComponent>
                        </div>
                    ) : ('')
                }

                <div className="row align-items-center border bg-white pt-2 mb-1">
                    <div className="col-md-4">
                        <div className="form-group text-center text-sm-left">
                            <label className="d-block h6 mb-0"> Ativo </label>
                            <CheckboxComponent
                                value={this.state.fieldStatus}
                                move={() => this.setState({ fieldStatus: !this.state.fieldStatus })}
                                label={['Nâo', 'Sim']}
                            ></CheckboxComponent>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="form-group text-right d-flex">
                            <button type="button" className="btn btn-link w-50">  Cancelar </button>
                            <button type="button" className="btn btn-primary w-50">  Continuar </button>
                        </div>
                    </div>
                </div>

                <p style={{ color: 'red' }}> {this.state.error} </p>
            </form>
        );
    }
}

export default ProductFormRoute;