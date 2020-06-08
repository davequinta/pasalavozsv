import React from "react";
import './zones.css'

const ZonesComponent = (props) => {
    return (
        <div className="container-fluid container">
            <div className="row justify-content-center row-text">
                <div className="col-10 col-md-4">
                    <p className="text-zone">¿Cómo puedo ayudar?</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-11">
                    <div className="row justify-content-md-between justify-content-around justify-content-center justify-content-center">
                        <div className="col-8 col-sm-5 col-md-3 zona-occ btn" onClick={() => props.navigationOrg(1)}>
                            <div className="row justify-content-center align-items-center zone-cont-txt">
                                <div className="col zone-txt">
                                    ZONA OCCIDENTAL
                                </div>
                            </div>  
                        </div>
                        <div className="col-8 col-sm-5 col-md-3 zona-cen btn" onClick={() => props.navigationOrg(2)}>
                            <div className="row justify-content-center align-items-center zone-cont-txt">
                                <div className="col zone-txt">
                                    ZONA CENTRAL
                                </div>
                            </div>
                        </div>
                        <div className="col-8 col-sm-5 col-md-3 zona-ori btn" onClick={() => props.navigationOrg(3)}>
                            <div className="row justify-content-center align-items-center zone-cont-txt">
                                <div className="col zone-txt">
                                    ZONA ORIENTAL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZonesComponent