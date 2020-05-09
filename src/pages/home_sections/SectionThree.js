import React from 'react';
import imgSrcOne from '../../images/Home_Sections/SectionThree/1.jpg'
import imgSrcTwo from '../../images/Home_Sections/SectionThree/2.jpg'
import imgSrcThree from '../../images/Home_Sections/SectionThree/3.jpg'
import imgSrcFour from '../../images/Home_Sections/SectionThree/4.jpg'
import imgSrcFive from '../../images/Home_Sections/SectionThree/5.jpg'
import imgSrcSix from '../../images/Home_Sections/SectionThree/6.jpg'
import imgSrcSeven from '../../images/Home_Sections/SectionThree/7.jpg'
import imgSrcEight from '../../images/Home_Sections/SectionThree/8.jpg'

const SectionThree = () => {
    return (
<section id="galeria">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcEight} className="grid-image" />
                    </div>
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcTwo} className="grid-image" />
                    </div>
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcThree} className="grid-image" />
                    </div>
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcFour} className="grid-image" />
                    </div>
                </div>  
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcFive} className="grid-image" />
                    </div>
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcSix} className="grid-image" />
                    </div>
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcSeven} className="grid-image" />
                    </div>
                    <div className="col-12 col-sm grid">
                        <img src={imgSrcEight} className="grid-image" />
                    </div>
                </div>
            </div>
    </section>
    )
}

export {SectionThree}