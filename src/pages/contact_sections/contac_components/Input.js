import React, { forwardRef } from 'react';
const Input = forwardRef(({ id, placeholder, name, type="text"}, ref) => {
    return ( 
            <input   id={id} className="input100" type={type}  placeholder={placeholder}  name={name} ref={ref}/>  
    )
})
export { Input }




