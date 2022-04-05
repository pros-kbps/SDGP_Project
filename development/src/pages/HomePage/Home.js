import * as React from 'react';
import PredictForm from './PredictForm'
//import {Grid } from '@material-ui/core';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from "../../components/Header/Header"
import Timeline from './Timeline/timeline'
export default function Home() {
    
    return (
    <div className="header 2">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={1}>
                <Timeline/>
            </Grid>
            <Grid item xs={11}>
                <PredictForm/>
            </Grid>
        </Grid>
        
        
        
    </div>

    );
}

