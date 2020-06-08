import React from 'react'
import './header.css'

const HeaderComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 header-form p-0">
                    <div className='cover'>
                        <div className='content-container gotham-medium'>
                            <h4>¿Quién necesita ayuda?</h4>
                            <span>
                                Si conoces una comunidad que necesite ayuda
                                <br></br>
                                llená el formulario
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent