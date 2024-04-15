import React from 'react';
import { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import ImageList from './components/ImageList';
import ImageData from './components/ImageData';
import ImageDataEditor from './components/ImageDataEditor';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [images, setImages] = useState([]);
  
  function fetchImages() {
    fetch("http://localhost:3000")
    .then((res) => !res.ok ? Error("Unexpected server response") : res.json())
    .then((data) => setImages(data))
    .catch((error) => console.log("Error: ", error));
  }

  useEffect(() => fetchImages(), []);

  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<ImageList images={images}/>}/>
          <Route path="/:id" element={<ImageData/>}/>
          <Route path="/update/:id" element={<ImageDataEditor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
