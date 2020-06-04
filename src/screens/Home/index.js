import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Home.css";
import NavbarComponent from "../../components/Navbar";
import SlideComponent from "../../components/Slide/slide";
import ZonesComponent from "../../components/Zones/zones";
import FooterComponent from "../../components/Footer/footer";


const initState = {

}
class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initState,

        }
    }
    render() {

        return (
            <>
                <NavbarComponent />
                <div className='main-container gotham-medium'>
                    <SlideComponent />
                    <ZonesComponent />
                    <FooterComponent />
                </div>
            </>
        )
    }
}

export default withRouter(HomeScreen)