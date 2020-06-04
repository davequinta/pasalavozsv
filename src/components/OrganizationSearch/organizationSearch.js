import React from 'react';
import './organizationSearch.css'
import { IconContext } from "react-icons"
import { FaFilter, FaBroom } from 'react-icons/fa';

import OrganizationCardComponent from "../OrganizartionCard/organizationCard"

const OrganizationSearchComponent = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center row-search">
                <div className="col-10 search-component">
                    <form>
                        <div className="form-row form-row-cont">
                            <div className="col-10">
                                <div className="row">
                                    <div className="form-group col-md-3 select-container">
                                        <select id="inputState" className="form-control select-element">
                                            <option selected>Donación</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3 select-container">
                                        <select id="inputState" className="form-control select-element">
                                            <option selected>Recolección</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3 select-container">
                                        <select id="inputState" className="form-control select-element">
                                            <option selected>Departamento</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3 select-container">
                                        <select id="inputState" className="form-control select-element">
                                            <option selected>Para</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="btn-form">
                                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                <div>
                                                    <FaFilter />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="btn-form-2">
                                            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                <div>
                                                    <FaBroom />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

             <div className="row justify-content-center cards-row">
                <div className="col-10">
                    <div className="row justify-content-between">
                        <OrganizationCardComponent />
                        <OrganizationCardComponent />
                        <OrganizationCardComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationSearchComponent