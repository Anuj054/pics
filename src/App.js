import { useState } from 'react';
import React from 'react';
import SearchBar from './components/SeacrhBar';
import searchImages from './api';
import Image


function App() {
  const [images,setImages]=useState([]);
    const handleSubmit= async(term)=>{
    const result=await searchImages(term);
     setImages(result);
    }
  return (
    <div>
<SearchBar onSubmit={handleSubmit}/>
<ImageList images={images}/>
    </div>
  );
}

export default App;
