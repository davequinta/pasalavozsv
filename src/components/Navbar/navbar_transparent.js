import React from 'react'
import './Navbar.css'

const NavbarTComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top fluid w-100 d-flex justify-content-between cont-navbar" >
            <div className="navbar-brand logo-cont">
                <a href="/">
                    <img className="logo-navbar" src={require('../../assets/img/pasalavoz.png')}></img>
                </a>
            </div>
           
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="/organizations">Organizaciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Solicitar ayuda</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarTComponent