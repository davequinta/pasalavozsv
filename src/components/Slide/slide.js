import React from 'react'
import './slide.css';

const SlideComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-11 slider">
                    <h1>Slider</h1>
                </div>
            </div>
            <div className="row justify-content-center text-container">
                <div className="col-12 col-sm-10">
                    <p className="slide-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut cursus libero, at gravida tortor. Sed tempus purus eget diam feugiat lacinia. Suspendisse neque magna, placerat vitae convallis nec, pellentesque vitae urna. Duis in aliquam mauris, non condimentum ante. Curabitur et leo lobortis, semper sem sit amet, lobortis arcu.
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-3 btn-slider">
                            Solicitar Ayuda
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideComponent