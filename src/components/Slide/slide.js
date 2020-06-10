import React from 'react'
import './slide.css';
import { FaRegQuestionCircle } from 'react-icons/fa';

const SlideComponent = (props) => {
    return (
        <div className="container-fluid cont-header-index">
            <div className="row justify-content-center align-items-center row-container">
                <div className="col-11">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-sm-8 col-md-6 cont-img-index">
                            <img className="img-header-index" src={require('../../assets/img/header.png')}></img>
                        </div>
                        <div className="col-12 col-md-6 col-txt-index">
                            <div className="row">
                                <div className="col-12">
                                    <p className="txt-index gotham-medium">
                                        La tormenta tropical “Amanda” ha traído consigo estragos que han afectado a los hogares más vulnerables de El Salvador. Daños en vivienda, inundaciones, desbordamientos, decenas de evacuados y muchas cosas más. 
                                    </p>
                                    <p className="txt-index gotham-medium">
                                        “Pasá la Voz” es una iniciativa que pretende ayudar a todas aquellas personas que deseen aportar donaciones a los centros de acopio y/o transferencias bancarias.
                                    </p>
                                </div>
                                <div className="col-12">
                                    <div className="row justify-content-center">
                                        <div className="col-11 col-sm-4 btn-index-help btn" onClick={props.moveHistory}>
                                            Solicitá ayuda
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideComponent