import React from 'react';
//import cricket from '../assets/LP img1.jpg';
//import {link} from 'react-router-dom';
import { styled } from '@mui/material/styles'
import '../styles/Start.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import history from './history'


import startpageImg from '../assets/start1.png';




export default function Start() {

  return (
    <div class= "container">
      <div class="image">
         <img src = {startpageImg} alt = "cricket image"/>
      </div>
      <div class="content">
        <logo>
          LEAGUE OF 11
        </logo>
        <p id="txt1">
          CRICKET TEAM PREDICTOR
        </p>
        <button id="Button" onClick={() => history.push('/home')}>
           Get Started
        </button>

      </div>

    </div>
    
  );
}


