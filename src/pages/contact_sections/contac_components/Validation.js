import React from 'react';
const Validation = ({className, validation, isValid =false, children}) => {

    return ( 
        <div className={[className, isValid ? " alert-validate" :""]} data-validate={validation} >
            {children}
       </div>      
    )
}

export { Validation }
