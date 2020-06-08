import React from 'react'
import './header.css'

const HeaderComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 header">
                    <div className="row justify-content-center">
                        <div className=" col-12 col-sm-10 col-md-7">
                            <img className="header-img" src={require('../../assets/img/header.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent