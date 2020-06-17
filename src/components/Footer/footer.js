import React from 'react';
import './footer.css'
import { FaHeart } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <div className="container-fluid cont-footer">
            <div className="row">
                <div className="col-12 footer">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-9 col-md-6 col-lg-5 ">
                            <div className="row justify-content-center row-logo">
                                <div className="col-5">
                                    <img className="logo" src={require('../../assets/img/pasalavoz.png')}></img>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 footer-email">
                                    <a className="txt-row" href='mailto:info@pasalavozsv.com' style={{ textDecoration: 'none' }}>
                                        <p className='gotham-medium' style={{ color: '#FF5A4D' }}>info@pasalavozsv.com</p>
                                    </a>
                                </div>
                                <div className="col-12 footer-txt">
                                    <p className="txt-row gotham-medium">
                                        Made with <FaHeart />
                                    </p>
                                </div>
                                <div className="col-12 footer-txt-2">
                                    <p className="txt-row gotham-medium">
                                        Vanessa García - Georgina Montoya - Natalia Guzmán
                                    </p>
                                </div>
                                <div className="col-12 footer-txt-2">
                                    <p className="txt-row gotham-medium">
                                        David Quintanilla - Jaime Torres  - Mauricio Trejo - Herberth Peñate
                                    </p>
                                </div>
                                <div className="col-12 footer-txt-3">
                                    <p className="txt-row gotham-medium">
                                        Beatriz Fernández, Karina Castaneda, Andrea Ruiz, Carlos Baires
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent