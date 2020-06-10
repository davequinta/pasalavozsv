import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './organizationProfile.css';
import NavbarTComponent from "../../components/Navbar/navbar_transparent";
import FooterComponent from "../../components/Footer/footer";
import OrganizationHeaderComponent from "../../components/OrganizationHeader/organizationHeader";

const initState = {

}

class OrganizationProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initState,
        }
    }

    render() {
        return (
            <>
                <NavbarTComponent />
                <div className='gotham-medium'>
                    <OrganizationHeaderComponent />
                    <FooterComponent />
                </div>
            </>
        )
    }
}

export default withRouter(OrganizationProfileScreen)