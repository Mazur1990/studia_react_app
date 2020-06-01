import React, { forwardRef } from 'react';







const Input = forwardRef(({ id, placeholder, name, type="text"}, ref) => {

    return ( 
            <input   id={id} className="input100" type={type}  placeholder={placeholder}  name={name} ref={ref}/>  
    )

})
export { Input }


// VALIDATION

// const Input = ({id, className, type, placeholder, name, ref}) => {

//     return ( 
//         <input id={id} className={className} type={type} placeholder={placeholder}  name={name} ref={ref}/>
//     )
// }
// export { Input }

