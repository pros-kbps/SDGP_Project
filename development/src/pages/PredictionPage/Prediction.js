import React,{ useState } from "react";

import {useLocation} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import '../../styles/Card.css';
import winner from '../../assets/winner.jpeg';
import CardMedia from '@mui/material/CardMedia';

export default function Prediction(props){

    const { state } = props.location;
    console.log(state)
    return (
        <div className ="prediction">
                <Grid item xs={12}>
                <CardMedia
        component="img"
        height="300"
        img src={winner}
        alt="Paella dish"
      />
                    </Grid>
            <div className="heder">
            <Grid container justifyContent="center" >
      <div className="card">
          <h1>Prediction Results</h1>
          <div className="card__body">
          <Grid item xs={12}></Grid>
            <p>Date: {state.data2.date.getDate()}-{state.data2.date.getMonth() + 1}-{state.data2.date.getFullYear()}</p>
            <p>Team 1: {state.data2.team1.title}</p>
            <p>Team 2: {state.data2.team2.title}</p>
            <b>Winning Team: {state.data.data.winningTeam}</b>
          </div>
      </div>
    </Grid>
        </div>
        
             </div>
        

    );
}