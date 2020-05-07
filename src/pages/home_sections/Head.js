import React from 'react';
import videoSrc from '../../images/Home_Sections/Head/1.mp4'

const Head = () => {
    return (
        <header>
            <div className="video_container">
                <video id="video" autoPlay loop  muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <div id="titleText">
                <h1>Lorem ipsum dolor sit amet. Est assumenda facilis consequuntur!</h1>
            </div>
        </header>
    )
}

export {Head}