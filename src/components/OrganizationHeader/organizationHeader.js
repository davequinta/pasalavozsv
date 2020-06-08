import React from 'react';
import './organizationHeader.css';
import { withRouter } from "react-router-dom";
import { IconContext } from "react-icons"
import { FaMap, FaBookmark, FaCompass, FaRegMap, FaMailBulk, FaMailchimp, FaMoneyBillWave, FaWarehouse, FaRegMoneyBillAlt, FaCarSide } from 'react-icons/fa';

import { MdPhoneIphone } from 'react-icons/md';


import { GrDeliver } from 'react-icons/gr';
import OrganizationCardMiniComponent from '../OrganizationCardMini/organizationCardMini';

class OrganizationHeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            organization: props.location.state.organization
        }
        console.log(this.props.location.state.organization)
    }


    render() {

        return (
            <div className="container-fluid cont-header ">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-5">
                                <div className="cont-img">

                                </div>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="name-txt gotham-medium">
                                    {this.state.organization.name}
                                </div>
                                <div className="desc-txt ">
                                    {this.state.organization.description}
                                </div>
                                <div className="type-txt d-flex align-items-center" >
                                    <span className='type-txt gotham-medium align-self-center mr-3'> Tipos de donación:</span>

                                    {

                                        this.state.organization.collection_type.map(collection => {
                                            console.log('COLLECtion', collection);

                                            switch (collection) {
                                                case 'Centro de acopio':
                                                    return (
                                                        <div data-toggle="tooltip" data-placement="top" title="Centro de acopio">
                                                            <IconContext.Provider value={{ color: "#263C4F", className: "global-class-name mr-3" }} >
                                                                <FaWarehouse style={{ width: '25px', height: '25px' }} />
                                                            </IconContext.Provider>

                                                        </div>
                                                    )

                                                case 'Transferencia Bancaria':
                                                    return (
                                                        <div data-toggle="tooltip" data-placement="top" title="Transferencia Bancaria">

                                                            <IconContext.Provider value={{ color: "#263C4F", className: "global-class-name mr-3" }}>
                                                                <FaRegMoneyBillAlt style={{ width: '25px', height: '25px' }} />
                                                            </IconContext.Provider>
                                                        </div>

                                                    )
                                                case 'Recolección a "domicilio"':
                                                    return (
                                                        <div data-toggle="tooltip" data-placement="top" title='Recolección a "domicilio"'>

                                                            <IconContext.Provider value={{ color: "#263C4F", className: "global-class-name mr-3" }}>
                                                                <FaCarSide style={{ width: '25px', height: '25px' }} />
                                                            </IconContext.Provider>
                                                        </div>

                                                    )
                                                case 'Donacion HUGO APP':
                                                    return (
                                                        <div data-toggle="tooltip" data-placement="top" title='Donacion HUGO APP'>

                                                            <IconContext.Provider value={{ color: "#263C4F", className: "global-class-name mr-3" }}>
                                                                <MdPhoneIphone style={{ width: '25px', height: '25px' }} />
                                                            </IconContext.Provider>
                                                        </div>

                                                    )
                                                default:
                                                    break;
                                            }
                                        }
                                        )

                                    }
                                </div>
                                <div className="org-btn">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="help-btn gotham-medium d-flex align-items-center justify-content-center pt-3" onClick={() => this.props.history.push('/helpForm')}>
                                                Solicitá Ayuda
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center org-detail-info">
                            <div className="col-10">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-4">
                                        <div className="title-card-org">
                                            <IconContext.Provider value={{ color: "#3AC9CC", className: "global-class-name" }}>
                                                <div className='gotham-medium'>
                                                    <FaCompass /> Dirección
                                            </div>
                                            </IconContext.Provider>
                                        </div>
                                        <div className="txt-direction gotham-medium">
                                            {this.state.organization.address}
                                        </div>
                                    </div>
                                    <div className="col-4 cont-line">
                                        <div className="title-card-org">
                                            <IconContext.Provider value={{ color: "#3AC9CC", className: "global-class-name" }}>
                                                <div className='gotham-medium'>
                                                    <FaMailBulk /> Contacto
                                            </div>
                                            </IconContext.Provider>
                                        </div>
                                        <div className="txt-contacts">

                                            {this.state.organization.contacts[0].phone === '' || this.state.organization.contacts[0].phone === ' ' ?
                                                null :
                                                (<div className=" gotham-bold" >
                                                    <span style={{ color: '#263C4F' }}><strong>Teléfono:</strong> {this.state.organization.contacts[0].phone}</span>
                                                </div>)
                                            }
                                            {this.state.organization.contacts[0].email === '' || this.state.organization.contacts[0].email === ' ' ?
                                                null :
                                                (<div className=" gotham-bold" >
                                                    <span style={{ color: '#263C4F' }}><strong>Correo electrónico:</strong> {this.state.organization.contacts[0].email}</span>
                                                </div>)
                                            }

                                            {this.state.organization.contacts[0].twitter === '' || this.state.organization.contacts[0].twitter === ' ' ?
                                                null :
                                                (<div className=" gotham-bold" >
                                                    <span style={{ color: '#263C4F' }}><strong>Twitter:</strong> {this.state.organization.contacts[0].twitter}</span>
                                                </div>)
                                            }
                                            {this.state.organization.contacts[0].facebook === '' || this.state.organization.contacts[0].facebook === ' ' ?
                                                null :
                                                (<div className=" gotham-bold" >
                                                    <span style={{ color: '#263C4F' }}><strong>Teléfono:</strong> {this.state.organization.contacts[0].facebook}</span>
                                                </div>)
                                            }
                                            {this.state.organization.contacts[0].instagram === '' || this.state.organization.contacts[0].instagram === ' ' ?
                                                null :
                                                (<div className=" gotham-bold" >
                                                    <span style={{ color: '#263C4F' }}><strong>Teléfono:</strong> {this.state.organization.contacts[0].instagram}</span>
                                                </div>)
                                            }


                                        </div>
                                    </div>
                                    <div className="col-4 cont-line">
                                        <div className="title-card-org">
                                            <IconContext.Provider value={{ color: "#3AC9CC", className: "global-class-name " }}>
                                                <div className='gotham-medium'>
                                                    <FaMoneyBillWave /> Cuenta Bancaria
                                            </div>
                                            </IconContext.Provider>
                                        </div>
                                        <div className="txt-accounts gotham-medium">
                                            {this.state.organization.accounts.map(contact => (
                                                <div className="contact">
                                                    <span style={{ color: '#263C4F' }}>  <strong>{contact.bank}:</strong> {contact.accountNumber}</span>
                                                    <span style={{ color: '#263C4F' }}>{contact.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 title-cards-org gotham-medium">
                                Otras iniciativas
                        </div>
                            <div className="col-12 cont-cards-org">
                                <div className="row justify-content-between align-items-center">
                                    <OrganizationCardMiniComponent />
                                    <OrganizationCardMiniComponent />
                                    <OrganizationCardMiniComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(OrganizationHeaderComponent)