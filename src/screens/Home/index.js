import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Home.css";
import NavbarTComponent from "../../components/Navbar/navbar_transparent";
import SlideComponent from "../../components/Slide/slide";
import ZonesComponent from "../../components/Zones/zones";
import FooterComponent from "../../components/Footer/footer";


import firebase from 'firebase'
const initState = {
}



class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initState,

        }
    }


    navigationHandler = () => {
        this.props.history.push('/helpForm')
    }

    organizationsNavigation = (value) => {
        this.props.history.push('/organizations', { zone: value })
    }

    render() {

        return (
            <>
                <NavbarTComponent />
                <div className='main-container gotham-medium'>
                    <SlideComponent navigationHandler={this.navigationHandler} moveHistory={() => this.props.history.push('/helpForm') }/>
                        <ZonesComponent navigationOrg={this.organizationsNavigation} />
                        <FooterComponent />
                </div>
            </>
        )
    }
}

export default withRouter(HomeScreen)