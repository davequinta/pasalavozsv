import React from 'react'

const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed fluid w-100 d-flex justify-content-between" >
            <a className="navbar-brand" href="#">Navbar</a>
            <div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent