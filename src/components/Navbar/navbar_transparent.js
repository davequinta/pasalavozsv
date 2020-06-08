import React from 'react'
import './Navbar.css'

const NavbarTComponent = () => {
    
    let state = {
        isTop: true,
    };
        
    document.addEventListener('scroll', () => {
      state.isTop = window.scrollY < 100;
    });


    return (
        <div className="container-fluid fixed-top cont-navbar">
            <nav className="navbar navbar-expand-md navbar-light justify-content-sm-between" >
            
            <div className="navbar-brand logo-cont">
                <a href="/">
                    <img className="logo-navbar" src={require('../../assets/img/pasalavoz.png')}></img>
                </a>
            </div>
           
            <div>
                <div className="btn-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-item-2">
                            <a className="nav-link" href="/organizations">Organizaciones</a>
                        </li>
                        <li className="nav-item nav-item-2">
                            <a className="nav-link" href="/helpForm">Solicitar ayuda</a>
                        </li>

                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavbarTComponent