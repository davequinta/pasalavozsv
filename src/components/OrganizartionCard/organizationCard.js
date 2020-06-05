import React from 'react'
import './organizationCard.css'

const OrganizationCardComponent = (props) => {
    const { organization } = props
    return (
        <div className="col-6 col-sm-3" >
            <div className="row">
                <div className="img-cont">

                </div>
            </div>
            <div className="row">
                <div className="txt-card">
                    <h3 className="title-txt">{organization.name}</h3>
                    <p className="cont-txt">
                        {organization.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrganizationCardComponent