import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Home.css";
import NavbarComponent from "../../components/Navbar";

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
                    <span>Hola mundo</span>
                </div>
            </>
        )
    }
}

export default withRouter(HomeScreen)