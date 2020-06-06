import React from 'react';
import './organizationSearch.css'
import { IconContext } from "react-icons"
import { withRouter } from 'react-router-dom';

import { FaFilter, FaBroom } from 'react-icons/fa';
import firebase from 'firebase'

import OrganizationCardComponent from "../OrganizartionCard/organizationCard"

class OrganizationSearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: {
                donation_type: 'none',
                collection_type: 'none',
                state: 'none',
                help_type: 'none',
            },
            organizationsShown: [],
            organizationsList: [],
        }
        this.retrieveOrganizations()
    }


    retrieveOrganizations = async () => {
        let aux_docs = []
        let selected_docs = []
        const docs = await firebase.firestore().collection('donations').get()
        docs.forEach(doc => {

            aux_docs.push(doc.data())
            if (this.props.location.state) {
                switch (this.props.location.state.zone) {
                    case 1:
                        if (doc.data().state.includes('Santa Ana') || doc.data().state.includes('Ahuachapán') || doc.data().state.includes('Sonsonate')) {
                            selected_docs.push(doc.data())
                        }
                        break;
                    case 2:

                        if (doc.data().state.includes('San Salvador') || doc.data().state.includes('Chalatenango') || doc.data().state.includes('La Libertad') || doc.data().state.includes('Cuscatlán') || doc.data().state.includes('La Paz')) {
                            selected_docs.push(doc.data())
                        }
                        break;
                    case 3:
                        if (doc.data().state.includes('San Vicente') || doc.data().state.includes('Usulután') || doc.data().state.includes('San Miguel') || doc.data().state.includes('Morazán') || doc.data().state.includes('La Unión')) {
                            selected_docs.push(doc.data())
                        }
                        break;
                    default:

                        break;
                }
            }
        })
        this.setState({ organizationsList: aux_docs, organizationsShown: this.props.location.state ? selected_docs : aux_docs })
    }




    _filterHandler = async () => {

        const donations = this.state.organizationsList
        if (this.state.filters.donation_type === "none" && this.state.filters.collection_type === "none" && this.state.filters.state === "none" && this.state.filters.help_type === "none") {

            this.setState({ organizationsShown: donations })
        }
        else {
            if (this.state.filters.donation_type !== 'none') {
                if (this.state.filters.collection_type !== 'none') {
                    if (this.state.filters.state !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.collection_type.includes(this.state.filters.collection_type) && donation.state.includes(this.state.filters.state) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.collection_type.includes(this.state.filters.collection_type) && donation.state.includes(this.state.filters.state)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }
                    else {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.collection_type.includes(this.state.filters.collection_type) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.collection_type.includes(this.state.filters.collection_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }

                }
                else {
                    if (this.state.filters.state !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.state.includes(this.state.filters.state) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.state.includes(this.state.filters.state)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }
                    else {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }
                }
            }
            else {
                if (this.state.filters.collection_type !== 'none') {
                    if (this.state.filters.state !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(this.state.filters.collection_type) && donation.state.includes(this.state.filters.state) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(this.state.filters.collection_type) && donation.state.includes(this.state.filters.state)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }
                    else {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(this.state.filters.collection_type) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(this.state.filters.collection_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }
                }
                else {
                    if (this.state.filters.state !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.state.includes(this.state.filters.state) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.state.includes(this.state.filters.state)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                    }
                    else {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.help_type.includes(this.state.filters.help_type)) {

                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }

                    }
                }
            }
        }

        console.log('ARRAY GOTTEN', this.state.organizationsShown)


    }


    clearFilters = () => {
        this.setState({
            filters: {
                donation_type: 'none',
                collection_type: 'none',
                state: 'none',
                help_type: 'none',
            },
            organizationsShown: this.state.organizationsList
        })
    }

    moveOrganizationProfile = (item) => {
        this.props.history.push('/organizationProfile', { organization: item })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center row-search">
                    <div className="col-10 search-component">
                        <form>
                            <div className="form-row form-row-cont">
                                <div className="col-10">
                                    <div className="row">
                                        <div className="form-group col-md-3 select-container">
                                            <label htmlFor='donationInput' style={{ color: '#FF5A4D' }}>Donación</label>
                                            <select id="donationInput" className="form-control select-element" value={this.state.filters.donation_type} onChange={(value) => this.setState({ filters: { ...this.state.filters, donation_type: value.target.value } })}>
                                                <option defaultValue value={'none'}>Todos</option>
                                                <option value={'Viveres'}>Viveres</option>
                                                <option value={'Monetarias'}>Monetarias</option>
                                                <option value={'Art. Primera Necesidad'}>Art. Primera Necesidad</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 select-container">
                                            <label htmlFor='collectionInput' style={{ color: '#FF5A4D' }}>Recolección</label>
                                            <select id="collectionInput" className="form-control select-element" value={this.state.filters.collection_type} onChange={(value) => this.setState({ filters: { ...this.state.filters, collection_type: value.target.value } })}>
                                                <option defaultValue value={'none'}>Todos</option>
                                                <option value={'Centro de Acopio'}>Centro de Acopio</option>
                                                <option value={'Transferencia Bancaria'}>Transferencia Bancaria</option>
                                                <option value={'Recolección a domicilio'}>Recolección a domicilio</option>

                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 select-container">
                                            <label htmlFor='stateInput' style={{ color: '#FF5A4D' }}>Departamento</label>
                                            <select id="stateInput" className="form-control select-element" value={this.state.filters.state} onChange={(value) => this.setState({ filters: { ...this.state.filters, state: value.target.value } })}>
                                                <option defaultValue value={'none'}>Todos</option>
                                                <option value={'San Salvador'}>San Salvador</option>
                                                <option value={'San Vicente'}>San Vicente</option>
                                                <option value={'Santa Ana'}>Santa Ana</option>
                                                <option value={'San Miguel'}>San Miguel</option>
                                                <option value={'La Paz'}>La Paz</option>
                                                <option value={'La Libertad'}>La Libertad</option>
                                                <option value={'La Unión'}>La Unión</option>
                                                <option value={'Usulután'}>Usulután</option>
                                                <option value={'Cuscatlán'}>Cuscatlán</option>
                                                <option value={'Morazán'}>Morazán</option>
                                                <option value={'Ahuachapán'}>Ahuachapán</option>
                                                <option value={'Cabañas'}>Cabañas</option>
                                                <option value={'Sonsonate'}>Sonsonate</option>
                                                <option value={'Chalatenango'}>Chalatenango</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 select-container">
                                            <label htmlFor='helpInput' style={{ color: '#FF5A4D' }}>Para</label>
                                            <select id="helpInput" className="form-control select-element" value={this.state.filters.help_type} onChange={(value) => this.setState({ filters: { ...this.state.filters, help_type: value.target.value } })}>
                                                <option defaultValue value={'none'} >Todos</option>
                                                <option value={'Niños'}>Niños</option>
                                                <option value={'Mujeres'}>Mujeres</option>
                                                <option value={'Hombres'}>Hombres</option>
                                                <option value={'Adultos Mayores'}>Adultos Mayores</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 d-flex justify-content-center align-items-end pb-1">
                                    <div className="w-100">
                                        <div className="btn-form" onClick={this._filterHandler}>
                                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                <div >
                                                    <FaFilter />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1  d-flex justify-content-center align-items-end pb-1">
                                    <div className="w-100">
                                        <div className="btn-form-2" onClick={this.clearFilters}>
                                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                <div>
                                                    <FaBroom />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center cards-row">
                    <div className="col-10">
                        <div className="row justify-content-around">
                            {
                                this.state.organizationsShown.map((organization, index) => <OrganizationCardComponent organization={organization} moveTo={() => this.moveOrganizationProfile(organization)} key={index.toString()} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(OrganizationSearchComponent)