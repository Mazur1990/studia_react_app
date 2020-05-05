import React from 'react';
import {Head} from './home_sections/Head'
import {SectionOne} from './home_sections/SectionOne'
import {SectionTwo} from './home_sections/SectionTwo'
import {SectionThree} from './home_sections/SectionThree'

const Home = () => {
    return (
        <>
        <Head/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        </>
    )
}

export {Home}