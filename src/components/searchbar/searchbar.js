import React, { useEffect, useState } from 'react';
import './searchbar.css';

const Searchbar = ({setcurrcity}) => {

  const [ city , setcity ] = useState('');
  const handlecitychange=(event)=>{
    setcity(event.target.value);
  }

  const handlesubmit=(event)=>{
    event.preventDefault();
    setcurrcity(city);
  }

  return (
    <div className='search'>
      <form  onSubmit={handlesubmit}>
        <input 
          name='searchcity'
          className='searchbox' 
          type="text" 
          placeholder='Search City. . . '
          onChange={handlecitychange}
        />

        <button type='submit' className='search-button' >
          Search
        </button>

        </form>

    </div>
  )
}

export default Searchbar