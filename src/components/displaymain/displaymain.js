// import React, { useEffect, useState } from 'react';
// import './displaymain.css';

// const Displaymain = ({ currcity,setlat,setlon,tempunit,lat,lon }) => {

//   //displaying data in main fields
//   const [showtemp,set_showtemp]=useState("");
//   const [ mintemp , setmintemp]=useState("");
//   const [ maxtemp , setmaxtemp]=useState("");
//   const [ weathercond , setweathercond]=useState("");
//   const [icon, seticon ]=useState("");


//   const [tempiconalpha, settempiconalpha ]=useState("C");

  
//   // Function to get data from the API
//   const search = async (name) => {
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`;
//       const response = await fetch(url);
//       const data = await response.json();
//       setlat("28.6667");
//       console.log("lat",lat);
//       setlon("77.2167");
//       console.log("lon",lon);
//         if(data){
//           set_showtemp(data.main.temp);
//           setmintemp(data.main.temp_min);
//           setmaxtemp(data.main.temp_max);
//           setweathercond(data.weather[0].main);
//           seticon(data.weather[0].icon);
//           setlat(data.coord.lat);
//           setlon(data.coord.lon);
//         }else{
//           console.log("data not recieved through API in maindisplay")
        
//         }

//         console.log("tmp unit when delhi is loaded at first:",tempunit);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//       // useEffect to call search function when currcity changes
//       useEffect(() => {
//         if (currcity) {
//           search(currcity);
//         }
//       }, [currcity]);

//       useEffect(() => {
//           if(tempunit!=="metric"){
//             settempiconalpha("F");
//             set_showtemp(((showtemp * 9)/5 +32).toFixed(2) );
//             setmintemp(((mintemp * 9)/5 +32).toFixed(2) );
//             setmaxtemp(((maxtemp * 9)/5 +32).toFixed(2));
//           }else{
//             // settempiconalpha("C");
//             // set_showtemp(showtemp );
//             // setmintemp(mintemp );
//             // setmaxtemp(maxtemp);
//           }
//       }, [currcity,tempunit]);


//   return (
//     <div className='main-display-box'>
//       <div className="cityname">
//         {currcity}
//       </div>
//       <div className="currtemp">
//         <div className="display_temp">
//           {showtemp} °{tempiconalpha}
//         </div>
//         <span className='small grey'>Min:{mintemp} / Max:{maxtemp}</span>
        
//       </div>
//       <div className="weathercondition centerall">

//         <span className='display_temp'>{weathercond}</span>
//         <span className='small grey'>Weather Condition:</span> 
//       </div>
//       <div className="icon">
//         <img className="weathericon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
       

//       </div>
//     </div>
//   );
// };

// export default Displaymain;
import React, { useEffect, useState } from 'react';
import './displaymain.css';

const Displaymain = ({ currcity, setlat, setlon, tempunit, lat, lon }) => {
  const [showtemp, set_showtemp] = useState("");
  const [mintemp, setmintemp] = useState("");
  const [maxtemp, setmaxtemp] = useState("");
  const [weathercond, setweathercond] = useState("");
  const [icon, seticon] = useState("");
  const [tempiconalpha, settempiconalpha] = useState("C");

  // Store original temperature values
  const [originalTemp, setOriginalTemp] = useState(null);
  const [originalMinTemp, setOriginalMinTemp] = useState(null);
  const [originalMaxTemp, setOriginalMaxTemp] = useState(null);

  const search = async (name) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setOriginalTemp(data.main.temp);
        setOriginalMinTemp(data.main.temp_min);
        setOriginalMaxTemp(data.main.temp_max);
        setweathercond(data.weather[0].main);
        seticon(data.weather[0].icon);
        setlat(data.coord.lat);
        setlon(data.coord.lon);
      } else {
        console.log("data not received through API in maindisplay");
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (currcity) {
      search(currcity);
    }
  }, [currcity]);

  useEffect(() => {
    if (originalTemp !== null && originalMinTemp !== null && originalMaxTemp !== null) {
      if (tempunit === "metric") {
        settempiconalpha("C");
        set_showtemp(originalTemp);
        setmintemp(originalMinTemp);
        setmaxtemp(originalMaxTemp);
      } else {
        settempiconalpha("F");
        set_showtemp(((originalTemp * 9) / 5 + 32).toFixed(2));
        setmintemp(((originalMinTemp * 9) / 5 + 32).toFixed(2));
        setmaxtemp(((originalMaxTemp * 9) / 5 + 32).toFixed(2));
      }
    }
  }, [tempunit, originalTemp, originalMinTemp, originalMaxTemp]);

  return (
    <div className='main-display-box'>
      <div className="cityname">
        {currcity}
      </div>
      <div className="currtemp">
        <div className="display_temp">
          {showtemp} °{tempiconalpha}
        </div>
        <span className='small grey'>Min:{mintemp} / Max:{maxtemp}</span>
      </div>
      <div className="weathercondition centerall">
        <span className='display_temp'>{weathercond}</span>
        <span className='small grey'>Weather Condition:</span>
      </div>
      <div className="icon">
        <img className="weathericon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
      </div>
    </div>
  );
};

export default Displaymain;


