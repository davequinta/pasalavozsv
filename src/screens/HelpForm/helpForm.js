import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./helpForm.css";
import NavbarTComponent from "../../components/Navbar/navbar_transparent";
import FooterComponent from "../../components/Footer/footer"
import HeaderComponent from "../../components/FormHeader/header"
import HelpFormComponent from "../../components/HelpFormComponent/helpForm"

const initState = {

}

class OrganizationsScreen extends Component {
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
                <div className='main-container-2 gotham-medium'>
                    <HeaderComponent />
                    <HelpFormComponent />
                    <FooterComponent />
                </div>
            </>
        )
    }
}

export default withRouter(OrganizationsScreen)