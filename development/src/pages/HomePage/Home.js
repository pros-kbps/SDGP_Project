import * as React from 'react';
import PredictForm from './PredictForm'
import {Grid } from '@material-ui/core';
import Container from '@mui/material/Container';
import Header from "../../components/Header/Header"

export default function Home() {
    
    return (
    <div className="header 2">
        <Header/>
        <PredictForm/>
    </div>

    );
}

