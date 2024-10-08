import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
const SeacrhBar = ({onSubmit}) => {
    const [term,setTerm]=useState('');
  const handleFormSubmit=(event)=>{
    event.preventDefault();
onSubmit(term)
  };
  const handleChange=(event)=>{
    setTerm(event.target.value)

  };
  
  return (

    <div className='search-bar'>
   <form  onSubmit={handleFormSubmit}>
    <label> Enter Search Term </label>
   <input value={term} onChange={handleChange}/>
   </form>
        
    </div>
  )
}

export default SeacrhBar