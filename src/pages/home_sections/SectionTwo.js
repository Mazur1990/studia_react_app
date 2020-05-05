import React from 'react';
import imageSrc from '../../images/Home_Sections/SectionTwo/2.jpg'

const SectionTwo = () => {
    return (
        <section id="oNas">
            <div class="container">
                <div class="row">
                    <div class="oNas_content-image col d-flex justify-content-center">
                        <img src={imageSrc} />
                    </div>
                    <div class="oNas_content-text col d-flex justify-content-center">
                        <div class="col d-flex justify-content-start">
                            <h1>Lorem ipsum?</h1>
                        </div>
                        <div class="oNas_content-text col d-flex justify-content-center">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est assumenda facilis consequuntur accusantium dignissimos nesciunt! Aut odit asperiores tenetur ex explicabo molestiae, consequuntur cum ipsam rem mollitia nobis, corrupti dolor.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {SectionTwo}