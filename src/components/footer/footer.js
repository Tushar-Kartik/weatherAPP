// import React from 'react';
// import './footer.css';

// const Footer = ({settempunit,tempunit}) => {

//     const handlesettempunit=()=>{
//         if(tempunit==="metric"){
//             settempunit("imperial");
//         }else{
//             settempunit("metric");
//         }
//         console.log("tempunit set by footer:",tempunit);
        
//     }

//   return (
//     <div>
//         <button className='togglebutton' id="tempButton" onClick={handlesettempunit}>
//         Change temp unit to F
//           </button>
//     </div>
//   )
// }

// export default Footer;
import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = ({ settempunit, tempunit }) => {
  const [buttonText, setButtonText] = useState("Change temp unit to F");

  useEffect(() => {
    if (tempunit === "metric") {
      setButtonText("Change temp unit to F");
    } else {
      setButtonText("Change temp unit to C");
    }
  }, [tempunit]);

  const handlesettempunit = () => {
    if (tempunit === "metric") {
      settempunit("imperial");
    } else {
      settempunit("metric");
    }
    console.log("tempunit set by footer:", tempunit);
  };

  return (
    <div>
      <button className='togglebutton' id="tempButton" onClick={handlesettempunit}>
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
