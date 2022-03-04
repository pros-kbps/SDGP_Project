import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import prediction_page from '../../assets/prediction_page.jpg'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../styles/MatchDetails.css";
import { brown } from "@mui/material/colors";

function MatchDetails () {
  return (
    <div className="menu">
        <h1> Prediction Page</h1>
        
      <Card sx={{ maxWidth: 550 }}>
        <img src={prediction_page} alt="Tesla" />
        <CardMedia
          component="img"
          height="250"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    
    </div>
  );
}

export default MatchDetails;