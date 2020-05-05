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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcOne} class="grid-image" />
                    </div>
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcTwo} class="grid-image" />
                    </div>
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcThree} class="grid-image" />
                    </div>
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcFour} class="grid-image" />
                    </div>
                </div>  
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcFive} class="grid-image" />
                    </div>
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcSix} class="grid-image" />
                    </div>
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcSeven} class="grid-image" />
                    </div>
                    <div class="col-12 col-sm grid">
                        <img src={imgSrcEight} class="grid-image" />
                    </div>
                </div>
            </div>
    </section>
    )
}

export {SectionThree}