import React, {useState} from 'react';

const Input = ({id, placeholder}) => {
    const [name, setName] = useState(false)

    const handleFunction =() =>{
        setName("lol")
        console.log(name)


        if(name===false){
            console.log('nie bangla')
        }else if (name===true){
            console.log('dziala')
        }
    }


    return ( 
        

            <input id={id} className="input100" type="text"  placeholder={placeholder} text={name} onChange={handleFunction}/>  
        
    )
}

export { Input }