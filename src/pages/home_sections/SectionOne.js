import React from 'react';
import imageSrcOne from '../../images/Home_Sections/SectionOne/1.png'
import imageSrcTwo from '../../images/Home_Sections/SectionOne/2.png'
import imageSrcThree from '../../images/Home_Sections/SectionOne/3.png'
import imageSrcFour from '../../images/Home_Sections/SectionOne/4.png'

const SectionOne = () => {
    return (
      <section id="treningi">
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center trening_container">
                    <img src={imageSrcOne} alt="" />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit.</p>
                </div>
                <div className="col d-flex justify-content-center trening_container">
                    <img src={imageSrcTwo} alt="" />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit.</p>
                </div>
                <div className="col d-flex justify-content-center trening_container">
                    <img src={imageSrcThree} alt="" />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit.</p>
                </div>
                <div className="col d-flex justify-content-center trening_container">
                    <img src={imageSrcFour} alt="" />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export {SectionOne}