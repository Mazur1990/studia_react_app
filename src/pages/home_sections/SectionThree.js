import React from 'react';
import {Gallery} from './home_components/Gallery'
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
                    <Gallery image={imgSrcEight} />
                    <Gallery image={imgSrcTwo} />
                    <Gallery image={imgSrcThree} />
                    <Gallery image={imgSrcFour} />
                </div>  
                <div className="row">
                    <Gallery image={imgSrcFive} />
                    <Gallery image={imgSrcSix} />
                    <Gallery image={imgSrcSeven} />
                    <Gallery image={imgSrcEight} />
                </div>
            </div>
    </section>
    )
}

export {SectionThree}