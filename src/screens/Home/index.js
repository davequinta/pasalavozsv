import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Home.css";
import NavbarComponent from "../../components/Navbar";
import SlideComponent from "../../components/Slide/slide";
import ZonesComponent from "../../components/Zones/zones";
import FooterComponent from "../../components/Footer/footer";


import firebase from 'firebase'
const initState = {
    shown: []
}


const op1 = null
const op2 = 'Centro de Acopio'
const op3 = null
const op4 = null
class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initState,

        }
    }


    getInfo = async () => {
        let donations = []
        const info = await firebase.firestore().collection('donations').get()
        info.forEach(doc => {
            donations.push(doc.data())
        })
        if (!op1 && !op2 && !op3 && !op4) {
            console.log('DONATIONS', donations);

            // this.setState({ shown: donations })
        }
        else {
            if (op1) {
                if (op2) {
                    if (op3) {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.collection_type.includes(op2) && donation.state.includes(op3) && donation.help_type.includes(op4)) {
                                    console.log('op1, op2, op3, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.collection_type.includes(op2) && donation.state.includes(op3)) {
                                    console.log('op1, op2, op3', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }
                    else {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.collection_type.includes(op2) && donation.help_type.includes(op4)) {
                                    console.log('op1, op2, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.collection_type.includes(op2)) {
                                    console.log('op1, op2', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }

                }
                else {
                    if (op3) {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.state.includes(op3) && donation.help_type.includes(op4)) {
                                    console.log('op1, op3, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.state.includes(op3)) {
                                    console.log('op1, op3', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }
                    else {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1) && donation.help_type.includes(op4)) {
                                    console.log('op1, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.donation_type.includes(op1)) {
                                    console.log('op1', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }
                }
            }
            else {
                if (op2) {
                    if (op3) {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(op2) && donation.state.includes(op3) && donation.help_type.includes(op4)) {
                                    console.log('op2, op3, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(op2) && donation.state.includes(op3)) {
                                    console.log('op2, op3', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }
                    else {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(op2) && donation.help_type.includes(op4)) {
                                    console.log('op2, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.collection_type.includes(op2)) {
                                    console.log('op2', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }

                }
                else {
                    if (op3) {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.state.includes(op3) && donation.help_type.includes(op4)) {
                                    console.log('op3, op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                        else {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.state.includes(op3)) {
                                    console.log('op3', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }
                    }
                    else {
                        if (op4) {
                            let aux_donations = []
                            donations.forEach(donation => {
                                if (donation.help_type.includes(op4)) {
                                    console.log('op4', donation)
                                    aux_donations.push(donation)
                                }
                            })
                            this.setState({ shown: aux_donations })
                        }

                    }
                }
            }
        }


    }



    organizationsNavigation = (zone) => {
        console.log('SENDING ZONE', zone);

        this.props.history.push('/organizations', { zone: zone })
    }


    render() {

        return (
            <>
                <NavbarComponent />
                <div className='main-container gotham-medium'>
                    <SlideComponent />
                    <ZonesComponent navigationOrg={this.organizationsNavigation} />
                    <FooterComponent />

                </div>
            </>
        )
    }
}

export default withRouter(HomeScreen)