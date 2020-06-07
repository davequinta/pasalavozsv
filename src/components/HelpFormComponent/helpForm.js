import React from 'react';
import './helpForm.css'
import { IconContext } from "react-icons"
import { withRouter } from 'react-router-dom';

import { FaMapMarker, FaBroom } from 'react-icons/fa';
import firebase from 'firebase'
import sendIcon from "../../assets/images/send.png";

const initState = {
    information: {
        who: '',
        state: '',
        address: '',
        name: '',
        contact: '',
        peopleNumber: '',
        kids: '',
        adults: '',
        elder: '',
    }

}
class HelpFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initState,
            sentData: false,
        }
    }

    changeHandler = (value) => {
        this.setState({ information: { ...this.state.information, [value.target.name]: value.target.value } })
    }


    checkEmpty = (event) => {
        event.preventDefault()
        const { who, state, address, name, contact } = this.state.information
        if (who === '' || state === '' || address === '' || name === '' || contact === '') {
            alert('Debes llenar todos los campos requeridos')
        } else {
            this.saveInfo()

        }
    }


    saveInfo = async () => {
        await firebase.firestore().collection('helpRequests').add(this.state.information)
        this.setState({ ...initState, sentData: true })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center row-search">
                    <div className="col-10 col-md-6 search-component form-container">
                        <h3>Solicitud de ayuda</h3>
                        <form className='d-flex flex-column ' onSubmit={this.checkEmpty}>
                            <label>¿Quién necesita la ayuda?</label>
                            <input type='text' required name='who' value={this.state.information.who} onChange={this.changeHandler} className='col-12 col-md-6 ' />

                            <label>Departamento // Municipio</label>
                            <input type='text' required name='state' value={this.state.information.state} onChange={this.changeHandler} className='col-12 col-md-6 ' />
                            <label>Dirección</label>

                            {/* <IconContext.Provider value={{ color: "#263C4F", className: "global-class-name" }}>
                                                <div>
                                                    <FaMapMarker />
                                                </div>
                                            </IconContext.Provider> */}


                            <input type='text' required name='address' value={this.state.information.address} onChange={this.changeHandler} className='col-12 col-md-6 ' />
                            <div className='d-flex flex-column flex-md-row justify-content-between  w-100'>
                                <div className=' col-12 col-md-6 p-0'>
                                    <label>Nombre representante</label>
                                    <input type='text' required name='name' value={this.state.information.name} onChange={this.changeHandler} className='w-100' />
                                </div>

                                <div className='col-12 col-md-5 p-0'>
                                    <label>Contacto</label>
                                    <input type='text' required name='contact' value={this.state.information.contact} onChange={this.changeHandler} className='w-100' />
                                </div>
                            </div>
                            <label>Cantidad de personas</label>
                            <input type='number ' name='peopleNumber' value={this.state.information.peopleNumber} onChange={this.changeHandler} className='col-12 col-md-6 ' />
                            <div className='d-flex flex-column flex-md-row justify-content-between mt-4'>
                                <div className='col-12 col-md-3 p-0'>
                                    <label >No. Niños</label>
                                    <input type='number' min='0' name='kids' value={this.state.information.kids} onChange={this.changeHandler} />
                                </div>

                                <div className='col-12 col-md-3 p-0'>
                                    <label>No.Adultos</label>
                                    <input type='number' min='0' name='adults' value={this.state.information.adults} onChange={this.changeHandler} />
                                </div>
                                <div className='col-12 col-md-3 p-0'>
                                    <label >No. Adultos Mayores</label>
                                    <input type='number' min='0' name='elder' value={this.state.information.elder} onChange={this.changeHandler} className='w-100' />
                                </div>                            </div>
                            <div className={this.state.sentData ? 'd-flex w-100 justify-content-between mt-4 mt-md-5 ' : 'd-flex w-100 justify-content-end mt-4 mt-md-5'}>
                                {this.state.sentData ?
                                    <span style={{ color: '#FF5A4D', alignSelf: 'center', fontWeight: 'bold' }}> Gracias por registrar tu solicitud.</span>
                                    : null
                                }
                                <button className='d-flex justify-content-center align-items-center btn pr-3' style={{ width: '60px', height: '60px', borderRadius: '50px', backgroundColor: '#263C4F' }} >
                                    <img src={sendIcon} style={{ width: '30px', height: '30px' }} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
      </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default withRouter(HelpFormComponent)