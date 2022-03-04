import React from 'react';
import './Header.css';
import headerImage from '../../assets/headerImage.jpeg';
import Grid from '@mui/material/Grid';

const Header = () => (
    <Grid container spacing={3}>
    <Grid item xs={12}>
        <img src={headerImage} alt="Tesla" />
    </Grid>
    </Grid>
)
export default Header;