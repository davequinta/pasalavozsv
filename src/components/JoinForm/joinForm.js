import React from "react";


const JoinFormComponent = (props) => {
    return (
        <div className='w-100 d-flex flex-column justify-content-center align-items-center gotham-light py-5 mt-5 px-3 text-center'>
            <h3 style={{ color: '#263C4F' }}>¿ERES UNA <strong>ORGANIZACIÓN?</strong></h3>
            <h3 style={{ color: '#FF5A4D' }}>COMPÁRTENOS TUS DATOS</h3>
            <a href='http://join.pasalavozsv.com/' target='_blank' rel="noopener noreferrer" className='px-5 py-2 mt-3' style={{ backgroundColor: "#3AC9CC", borderRadius: '10px', cursor: 'pointer', textDecoration: 'none' }}>

                <span className='gotham-medium' style={{ color: '#263C4F', fontWeight: 'bold' }}>Registrar</span>
            </a>
        </div>
    )
}

export default JoinFormComponent