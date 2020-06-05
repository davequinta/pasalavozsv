import React from 'react';
import './organizationHeader.css';
import { IconContext } from "react-icons"
import { FaMap, FaBookmark, FaCompass, FaRegMap, FaMailBulk, FaMailchimp, FaMoneyBillWave } from 'react-icons/fa';
import OrganizationCardMiniComponent from '../OrganizationCardMini/organizationCardMini';

const OrganizationHeaderComponent = () => {
    return (
        <div className="container-fluid cont-header">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-5">
                            <div className="cont-img">

                            </div>
                        </div>
                        <div className="col-12 col-sm-7">
                            <div className="name-txt">
                                Lorem Ipsum
                            </div>
                            <div className="desc-txt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut cursus libero, at gravida tortor. Sed tempus purus eget diam feugiat lacinia. Suspendisse neque magna, placerat vitae convallis nec, pellentesque vitae urna. Duis in aliquam mauris, non condimentum ante. Curabitur et leo lobortis, semper sem sit amet, lobortis arcu.
                            </div>
                            <div className="type-txt">
                                Tipos de donación 
                            </div>
                            <div className="org-btn">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="help-btn">
                                            Solicitá Ayuda
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center org-detail-info">
                        <div className="col-10">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-4">
                                    <div className="title-card-org">
                                        <IconContext.Provider value={{ color: "#3AC9CC", className: "global-class-name" }}>
                                            <div>
                                                <FaCompass /> Dirección
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="txt-direction">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut cursus libero, at gravida tortor
                                    </div>
                                </div>
                                <div className="col-4 cont-line">
                                    <div className="title-card-org">
                                        <IconContext.Provider value={{ color: "#3AC9CC", className: "global-class-name" }}>
                                            <div>
                                                <FaMailBulk /> Contacto
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="txt-contacts">
                                        <div className="contact">
                                            <strong>Lorem: </strong> Ipsum Dolor.
                                        </div>
                                        <div className="contact">
                                            <strong>Lorem: </strong> Ipsum Dolor.
                                        </div>
                                        <div className="contact">
                                            <strong>Lorem: </strong> Ipsum Dolor.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 cont-line">
                                    <div className="title-card-org">
                                        <IconContext.Provider value={{ color: "#3AC9CC", className: "global-class-name" }}>
                                            <div>
                                                <FaMoneyBillWave /> Cuenta Bancaria
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="txt-accounts">
                                        <div className="account">
                                            <strong>Lorem: </strong> Ipsum Dolor.
                                        </div>
                                        <div className="account">
                                            <strong>Lorem: </strong> Ipsum Dolor.
                                        </div>
                                        <div className="account">
                                            <strong>Lorem: </strong> Ipsum Dolor.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 title-cards-org">
                            Otras iniciativas
                        </div>
                        <div className="col-12 cont-cards-org">
                            <div className="row justify-content-between align-items-center">
                                <OrganizationCardMiniComponent />
                                <OrganizationCardMiniComponent />
                                <OrganizationCardMiniComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationHeaderComponent