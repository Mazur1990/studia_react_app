import React from 'react';

const Validation = ({styling,validation, children}) => {
    return ( 
        <div className={styling} data-validate={validation}>
            {children}
       </div>      
    )
}

export { Validation }

// wrap-input100 rs1-wrap-input100 validate-input