import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import "./organizations.css";
import NavbarTComponent from "../../components/Navbar/navbar_transparent";
import FooterComponent from "../../components/Footer/footer"
import HeaderComponent from "../../components/Header/header"
import OrganizationSearchComponent from "../../components/OrganizationSearch/organizationSearch"

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
                    <OrganizationSearchComponent />
                    <FooterComponent />
                </div>
            </>
        )
    }
}

export default withRouter(OrganizationsScreen)