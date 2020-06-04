import React from 'react'
import './organizationCard.css'

const OrganizationCardComponent = () => {
    return (
        <div className="col-6 col-sm-3">
            <div className="row">
                <div className="img-cont">

                </div>
            </div>
            <div className="row">
                <div className="txt-card">
                    <h3 className="title-txt">Lorem Ipsum</h3>
                    <p className="cont-txt">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut cursus libero, at gravida tortor. Sed tempus purus eget diam feugiat lacinia. Suspendisse neque magna, placerat vitae convallis nec, pellentesque vitae urna.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrganizationCardComponent