import React from 'react';
import '../styles/Start.css';
import Grid from '@mui/material/Grid';


import startpageImg from '../assets/start1.png';




export default function Start() {
  return (
    <div class= "container">
      <Grid item xs={4}>
      <div class="content">
        <logo>
          LEAGUE OF 11
        </logo>
        <p id="txt1">
          CRICKET TEAM PREDICTOR
        </p>
        <button id="Button" onclick={onclick}>
           Get Started
        </button>
      </div>
      </Grid>
      <Grid item xs={12}>
          <div className="image">
            <img src = {startpageImg} alt = "cricket image"/>
          </div>
        </Grid>

    </div>

  );
}


