import React from 'react';
//import cricket from '../assets/LP img1.jpg';
//import {link} from 'react-router-dom';
import { styled } from '@mui/material/styles'
import '../styles/Start.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function Start() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
           <img alt="complex" src="../assets/LPimg1.jpg" />
        </Grid>
        <Grid item xs={9} container direction="column" justifyContent="center" alignItems="center">
          <div className="text">
             <p id= "txt1">BATSMEN SCORE PREDICTOR</p>
             <Button className="but1" variant="outlined" color="primary">Get Started</Button>
          </div>
          </Grid>
      </Grid>
    </Box>
    
  );
}

export default Start;
