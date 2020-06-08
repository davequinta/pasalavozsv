import React from 'react'
import './slide.css';

const SlideComponent = (props) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-10 col-md-11 slider">
                    <img className="img-slide" src={require('../../assets/img/slide/slide_1.png')}></img>
                </div>
            </div>
            <div className="row justify-content-center text-container">
                <div className="col-12 col-sm-10">
                    <p className="slide-text">
                        La tormenta tropical “Amanda” ha traído consigo estragos que han afectado a los hogares más vulnerables de El Salvador. Daños en vivienda, inundaciones, desbordamientos, decenas de evacuados y muchas cosas más. “Pasá la Voz” es una iniciativa que pretende ayudar a todas aquellas personas que deseen aportar donaciones a los centros de acopio y/o transferencias bancarias. En este sitio encontrarás todos los detalles de cómo y dónde donar, hacia donde dirigir tus donativos. Todo organizado según zonas y necesidades.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-3 btn-slider" onClick={props.navigationHandler}>
                            Solicitar Ayuda
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideComponent