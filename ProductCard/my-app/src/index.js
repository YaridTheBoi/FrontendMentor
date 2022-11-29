import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const photo= document.getElementById('photo');
const card= document.getElementById('card');



function handleResize(){
  if(window.innerWidth<1200){
    console.log("Mobile")
    photo.setAttribute("src", "./images/image-product-mobile.jpg")
    card.style.flexWrap= 'wrap';
  }else{
    console.log("Desktop")
    photo.setAttribute("src", "./images/image-product-desktop.jpg")
    card.style.flexWrap= 'nowrap';
  }
}

window.addEventListener("resize", handleResize)