import React from 'react';
import imgaeSrc from '../../images/About_sections/aboutSectionTwo/final-logo-example.png'

const AboutSectionTwo = () => {
    return (
        <section id="partnerzy">
            <h1>PPartnership</h1>
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={imgaeSrc} alt=""/>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={imgaeSrc} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={imgaeSrc} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={imgaeSrc} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={imgaeSrc} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export {AboutSectionTwo}