import React from 'react'
import './forecast.css';
import Forecastitem from '../forecastitem/forecastitem';


const Forecast = ({lat,lon,currcity,tempunit}) => {
  
  // checking the value of lat and loan when page is first vistied(DELHI)
  console.log("lat value at first",lat);
  console.log("lon value at first",lon);
  console.log("currcity value at first:",currcity);

  
  return (
    <div className='forecast-container'>
        <Forecastitem
        tempunit={tempunit}
        lat={lat}
        lon={lon}
        currcity={currcity}
        day={9}
        ></Forecastitem>
        <Forecastitem
        tempunit={tempunit}
          lat={lat}
          lon={lon}
          currcity={currcity}
          day={17}
        ></Forecastitem>
        <Forecastitem
        tempunit={tempunit}
        lat={lat}
        lon={lon}
        currcity={currcity}
        day={25}
        ></Forecastitem>
        <Forecastitem
        tempunit={tempunit}
        lat={lat}
        lon={lon}
        currcity={currcity}
        day={33}>
        </Forecastitem>
        
        
    </div>
  )
}

export default Forecast