import React from 'react'
import './organizationCard.css'

const OrganizationCardComponent = (props) => {
    const { organization } = props
    return (
        <div className="col-12 col-sm-5 col-md-3 btn px-1 px-md-4" onClick={props.moveTo}>
            <div className="row">
                <div className="img-cont col-12">
                    <div className="row justify-content-center align-items-center row-txt-cont">
                        <div className="col-12">
                            <h3 className="title-txt">{organization.name}</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationCardComponent