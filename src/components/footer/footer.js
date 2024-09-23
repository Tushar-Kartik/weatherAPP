import React from 'react'

const Footer = ({settempunit,tempunit}) => {

    const handlesettempunit=()=>{
        if(tempunit==="metric"){
            settempunit("imperial");
        }else{
            settempunit("metric");
        }
        console.log("tempunit set by footer:",tempunit);
        
    }

  return (
    <div>
        <button onClick={handlesettempunit}>
              Change Temperature unit
          </button>
    </div>
  )
}

export default Footer;