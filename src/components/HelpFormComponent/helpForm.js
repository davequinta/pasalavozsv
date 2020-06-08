import React from 'react';
import './helpForm.css'
import { IconContext } from "react-icons"
import { withRouter } from 'react-router-dom';

import { FaMapMarker, FaMap } from 'react-icons/fa';
import firebase from 'firebase'
import sendIcon from "../../assets/images/send.png";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibXRyZWpvMTIiLCJhIjoiY2tiNHF4MjFxMHptbTMxcGFibjBlOHR1dyJ9.1YojeT0HnQljEyMcm-_D6Q';

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
            mapProperties: {
                lng: -89.224433,
                lat: 13.701284,
                zoom: 12
            },
            loading: true,

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
        await firebase.firestore().collection('helpRequests').add({ ...this.state.information, coordinates: { lat: this.state.mapProperties.lat, lng: this.state.mapProperties.lng } })
        this.setState({ ...initState, sentData: true })
    }
    async  componentDidMount() {


        if ("geolocation" in navigator) {
            console.log("Available");
            await navigator.geolocation.getCurrentPosition((position) => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState({ mapProperties: { lat: position.coords.latitude, lng: position.coords.longitude, zoom: 12 }, loading: false, })
                const map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [this.state.mapProperties.lng, this.state.mapProperties.lat],
                    zoom: this.state.mapProperties.zoom,
                });

                const marker = new mapboxgl.Marker()
                    .setLngLat([this.state.mapProperties.lng, this.state.mapProperties.lat])
                    .addTo(map);




                map.on('click', (e) => {
                    this.setState({ mapProperties: { ...this.state.mapProperties, lng: e.lngLat.lng, lat: e.lngLat.lat } })
                    marker.setLngLat([this.state.mapProperties.lng, this.state.mapProperties.lat])
                        .addTo(map);
                });

            }, error => {
                const map = new mapboxgl.Map({
                    container: this.mapContainer,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [this.state.mapProperties.lng, this.state.mapProperties.lat],
                    zoom: this.state.mapProperties.zoom,
                });

                const marker = new mapboxgl.Marker()
                    .setLngLat([this.state.mapProperties.lng, this.state.mapProperties.lat])
                    .addTo(map);



                map.on('click', (e) => {
                    this.setState({ mapProperties: { ...this.state.mapProperties, lng: e.lngLat.lng, lat: e.lngLat.lat } })
                    marker.setLngLat([this.state.mapProperties.lng, this.state.mapProperties.lat])
                        .addTo(map);
                });

            });
        } else {
            console.log("Not Available");
        }





    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center row-search-form">
                    <div className="col-10 col-md-6 search-component form-container">
                        <h3 className="h3-txt">Solicitud de ayuda</h3>
                        <form className='d-flex flex-column ' onSubmit={this.checkEmpty}>
                            <label>¿Quién necesita la ayuda?</label>
                            <input type='text' required name='who' value={this.state.information.who} onChange={this.changeHandler} className='col-12 col-md-6 ' />

                            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center  w-100'>
                                <div className='d-flex flex-column col-12 col-md-6 p-0'>
                                    <label>Departamento // Municipio</label>
                                    <input type='text' required name='state' value={this.state.information.state} onChange={this.changeHandler} />
                                </div>

                                <div className='col-12 col-md-5 p-0 btn-dde'>
                                    <button type="button" className="btn btn-primary d-flex align-items-center w-100 justify-content-center" data-toggle="modal" data-target="#exampleModalCenter" style={{ backgroundColor: '#263C4F' }}>
                                        Dinos dónde estás
                                    <IconContext.Provider value={{ color: "#FFFFFF", className: "global-class-name ml-2" }}>
                                            <div>
                                                <FaMap style={{ marginTop: '-5px' }} />
                                            </div>
                                        </IconContext.Provider>
                                    </button>
                                </div>
                            </div>


                            <label>Dirección</label>
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
                                    <input type='number' min='0' name='kids' value={this.state.information.kids} onChange={this.changeHandler} className='w-100'/>
                                </div>

                                <div className='col-12 col-md-3 p-0'>
                                    <label>No.Adultos</label>
                                    <input type='number' min='0' name='adults' value={this.state.information.adults} onChange={this.changeHandler} className='w-100'/>
                                </div>
                                <div className='col-12 col-md-3 p-0'>
                                    <label >No. Adultos Mayores</label>
                                    <input type='number' min='0' name='elder' value={this.state.information.elder} onChange={this.changeHandler} className='w-100' />
                                </div>                            
                            </div>
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

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Selecciona tu ubicación</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body d-flex justify-content-center align-items-center">

                                <div ref={el => this.mapContainer = el} className='mapContainer' />

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary d-flex align-items-center justify-content-center" data-dismiss="modal" style={{ backgroundColor: '#263C4F' }}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default withRouter(HelpFormComponent)