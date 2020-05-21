import React from 'react';
import imageSrcOne from '../../images/Home_Sections/SectionOne/1.png'
import imageSrcTwo from '../../images/Home_Sections/SectionOne/2.png'
import imageSrcThree from '../../images/Home_Sections/SectionOne/3.png'
import imageSrcFour from '../../images/Home_Sections/SectionOne/4.png'

import {Training} from './home_components/Training'

const SectionOne = () => {
    return (
      <section id="treningi">
        <div className="container">
            <div className="row">
                <Training image={imageSrcOne} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit." />
                <Training image={imageSrcTwo} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit." />
                <Training image={imageSrcThree} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit." />
                <Training image={imageSrcFour} title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi fugit, sint velit distinctio alias cumque itaque veritatis harum quibusdam eveniet corrupti unde ab illum ipsam ad voluptatibus molestias odit." />
            </div>
        </div>
    </section>
    )
}

export {SectionOne}