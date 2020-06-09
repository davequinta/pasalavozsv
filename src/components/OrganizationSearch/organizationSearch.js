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
                Departamento: 'none',
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
        const docs = await firebase.firestore().collection('organizations').get()
        docs.forEach(doc => {

            aux_docs.push(doc.data())
            if (this.props.location.state) {
                switch (this.props.location.state.zone) {
                    case 1:
                        if (doc.data().Departamento === 'Santa Ana' || doc.data().Departamento === 'Ahuachapán' || doc.data().Departamento === 'Sonsonate') {
                            selected_docs.push(doc.data())
                        }
                        break;
                    case 2:

                        if (doc.data().Departamento === 'San Salvador' || doc.data().Departamento === 'Chalatenango' || doc.data().Departamento === 'La Libertad' || doc.data().Departamento === 'Cuscatlán' || doc.data().Departamento === 'La Paz') {
                            selected_docs.push(doc.data())
                        }
                        break;
                    case 3:
                        if (doc.data().Departamento === 'San Vicente' || doc.data().Departamento === 'Usulután' || doc.data().Departamento === 'San Miguel' || doc.data().Departamento === 'Morazán' || doc.data().Departamento === 'La Unión') {
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
        if (this.state.filters.donation_type === "none" && this.state.filters.collection_type === "none" && this.state.filters.Departamento === "none" && this.state.filters.help_type === "none") {

            this.setState({ organizationsShown: donations })
        }
        else {
            if (this.state.filters.donation_type !== 'none') {
                if (this.state.filters.collection_type !== 'none') {
                    if (this.state.filters.Departamento !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.collection_type.includes(this.state.filters.collection_type) && donation.Departamento.includes(this.state.filters.Departamento) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.collection_type.includes(this.state.filters.collection_type) && donation.Departamento.includes(this.state.filters.Departamento)) {
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
                    if (this.state.filters.Departamento !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.Departamento.includes(this.state.filters.Departamento) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(this.state.filters.donation_type) && donation.Departamento.includes(this.state.filters.Departamento)) {
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
                    if (this.state.filters.Departamento !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(this.state.filters.collection_type) && donation.Departamento.includes(this.state.filters.Departamento) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(this.state.filters.collection_type) && donation.Departamento.includes(this.state.filters.Departamento)) {
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
                    if (this.state.filters.Departamento !== 'none') {
                        if (this.state.filters.help_type !== 'none') {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.Departamento.includes(this.state.filters.Departamento) && donation.help_type.includes(this.state.filters.help_type)) {
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ organizationsShown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.Departamento.includes(this.state.filters.Departamento)) {
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
                    <div className="col-11 col-md-10 search-component">
                        <form>
                            <div className="form-row form-row-cont">
                                <div className="col-12 col-md-10">
                                    <div className="row">
                                        <div className="form-group col-12 col-sm-6 col-md-3 select-container">
                                            <label className="label-filter" htmlFor='donationInput' style={{ color: '#FF5A4D' }}>Donación</label>
                                            <select id="donationInput" className="form-control custom-select" value={this.state.filters.donation_type} onChange={(value) => this.setState({ filters: { ...this.state.filters, donation_type: value.target.value } })}>
                                                <option className="option-select" defaultValue value={'none'}>Todos</option>
                                                <option className="option-select" value={'Víveres/art. primera necesidad'}>Víveres/art. primera necesidad</option>
                                                <option className="option-select" value={'Monetaria'}>Monetaria</option>
                                                <option className="option-select" value={'Ropa/sábanas'}>Ropa/sábanas</option>
                                                <option className="option-select" value={'Art. Femeninos'}>Art. Femeninos</option>
                                                <option className="option-select" value={'Artículos de higiene personal'}>Artículos de higiene personal</option>
                                                <option className="option-select" value={'colchonetas'}>colchonetas</option>
                                                <option className="option-select" value={'Art. Femeninos'}>Art. Femeninos</option>
                                                <option className="option-select" value={'Art. Bebes'}>Art. Bebes</option>
                                                <option className="option-select" value={'Art. Hombres'}>Art. Hombres</option>
                                                <option className="option-select" value={'Art. Adultos Mayores.'}>Art. Adultos Mayores.</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12 col-sm-6 col-md-3 select-container">
                                            <label className="label-filter" htmlFor='collectionInput' style={{ color: '#FF5A4D' }}>Recolección</label>
                                            <select id="collectionInput" className="form-control custom-select" value={this.state.filters.collection_type} onChange={(value) => this.setState({ filters: { ...this.state.filters, collection_type: value.target.value } })}>
                                                <option className="option-select" defaultValue value={'none'}>Todos</option>
                                                <option className="option-select" value={'Centro de acopio'}>Centro de acopio</option>
                                                <option className="option-select" value={'Transferencia Bancaria'}>Transferencia Bancaria</option>
                                                <option className="option-select" value={'Recolección a domicilio'}>Recolección a domicilio</option>
                                                <option className="option-select" value={'Donacion HUGO APP'}>Donacion HUGO APP</option>

                                            </select>
                                        </div>
                                        <div className="form-group col-12 col-sm-6 col-md-3 select-container">
                                            <label className="label-filter" htmlFor='stateInput' style={{ color: '#FF5A4D' }}>Departamento</label>
                                            <select id="stateInput" className="form-control custom-select" value={this.state.filters.Departamento} onChange={(value) => this.setState({ filters: { ...this.state.filters, Departamento: value.target.value } })}>
                                                <option className="option-select" defaultValue value={'none'}>Todos</option>
                                                <option className="option-select" value={'San Salvador'}>San Salvador</option>
                                                <option className="option-select" value={'San Vicente'}>San Vicente</option>
                                                <option className="option-select" value={'Santa Ana'}>Santa Ana</option>
                                                <option className="option-select" value={'San Miguel'}>San Miguel</option>
                                                <option className="option-select" value={'La Paz'}>La Paz</option>
                                                <option className="option-select" value={'La Libertad'}>La Libertad</option>
                                                <option className="option-select" value={'La Unión'}>La Unión</option>
                                                <option className="option-select" value={'Usulután'}>Usulután</option>
                                                <option className="option-select" value={'Cuscatlán'}>Cuscatlán</option>
                                                <option className="option-select" value={'Morazán'}>Morazán</option>
                                                <option className="option-select" value={'Ahuachapán'}>Ahuachapán</option>
                                                <option className="option-select" value={'Cabañas'}>Cabañas</option>
                                                <option className="option-select" value={'Sonsonate'}>Sonsonate</option>
                                                <option className="option-select" value={'Chalatenango'}>Chalatenango</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12 col-sm-6 col-md-3 select-container">
                                            <label className="label-filter" htmlFor='helpInput' style={{ color: '#FF5A4D' }}>Para</label>
                                            <select id="helpInput" className="form-control custom-select pt-2" value={this.state.filters.help_type} onChange={(value) => this.setState({ filters: { ...this.state.filters, help_type: value.target.value } })}>
                                                <option defaultValue value={'none'} >Todos</option>
                                                <option className="option-select p-0" value={'Niños'}>Niños</option>
                                                <option className="option-select" value={'Mujeres'}>Mujeres</option>
                                                <option className="option-select" value={'Hombres'}>Hombres</option>
                                                <option className="option-select" value={'Comunidad Gnral.'}>Comunidad Gnral.</option>
                                                <option className="option-select" value={'Adultos Mayores'}>Adultos Mayores</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-1 d-flex justify-content-center align-items-end pb-1">
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
                                <div className="col-12 col-sm-6 col-md-1  d-flex justify-content-center align-items-end pb-1">
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
                                this.state.organizationsShown.length>0 ?
                                this.state.organizationsShown.map((organization, index) => <OrganizationCardComponent organization={organization} moveTo={() => this.moveOrganizationProfile(organization)} key={index.toString()} />)
                                : 
                                <section className='d-flex justify-content-center align-item-center mt-3' style={{height:'5rem'}}>
                                    <span className='gotham-medium' style={{color:'#000000'}}>Aún no tenemos información registrada para esta búsqueda.</span>
                                </section>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(OrganizationSearchComponent)