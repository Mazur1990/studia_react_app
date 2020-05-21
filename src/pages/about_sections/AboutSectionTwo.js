import React from 'react';
import imgaeSrc from '../../images/About_sections/aboutSectionTwo/final-logo-example.png'
import {Partner} from './about_components/Partner'
const AboutSectionTwo = () => {
    return (
        <section id="partnerzy">
            <h1>PPartnership</h1>
            <div className="container">
                <div className="row">
                    <Partner logo={imgaeSrc}/>
                    <Partner logo={imgaeSrc}/>
                    <Partner logo={imgaeSrc}/>
                    <Partner logo={imgaeSrc}/>
                    <Partner logo={imgaeSrc}/>
                </div>
            </div>
        </section>
    )
}

export {AboutSectionTwo}