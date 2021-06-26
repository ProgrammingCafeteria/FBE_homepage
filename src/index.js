

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

function draw(jsx,selector){
  const eles = document.querySelectorAll(selector);
  eles.forEach(ele=>{
    ReactDOM.render(
      jsx,
      ele
    );
  });
}
/*
ReactDOM.render(
  <Header />,
  document.getElementById("header")
);
*/

draw(<Header />,"#header");
draw(<Footer />,"#footer");


reportWebVitals();
