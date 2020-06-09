import React from 'react'

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fluid w-100 d-flex justify-content-between normal-navbar" >
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
                    <ul className="navbar-nav ">
                        <li className="nav-item gotham-medium"  >
                            <a className="nav-link" href="/organizations" style={{color:'#000000'}}>Organizaciones</a>
                        </li>
                        <li className="nav-item gotham-medium">
                            <a className="nav-link" href="/helpForm" style={{color:'#000000'}}>Solicitar ayuda</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent