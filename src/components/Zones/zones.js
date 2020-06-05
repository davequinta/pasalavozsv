import React from "react";
import './zones.css'

const ZonesComponent = (props) => {
    return (
        <div className="container-fluid container">
            <div className="row justify-content-center row-text">
                <div className="col-4">
                    <p className="text-zone">¿Cómo puedo ayudar?</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-11">
                    <div className="row justify-content-between">
                        <div className="col-3 zonas btn" onClick={() => props.navigationOrg(1)}>

                        </div>
                        <div className="col-3 zonas btn" onClick={() => props.navigationOrg(2)}>

                        </div>
                        <div className="col-3 zonas btn" onClick={() => props.navigationOrg(3)}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZonesComponent