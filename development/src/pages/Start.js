import React from 'react';
import '../styles/Start.css';
import Grid from '@mui/material/Grid';
import startpageImg from '../assets/start1.png';
import { useHistory,Route, Switch} from "react-router-dom";
import home from './HomePage/Home'


	


export default function Start() {
  let history = useHistory();

  const redirect = () => {
    history.push('/home')
  }
  return (
    <div class= "container">
      <Grid item xs={8}>
      <div class="content">
        <logo>
          LEAGUE OF 11
        </logo>
        <p id="txt1">
          CRICKET TEAM PREDICTOR
        </p>
        <Switch>
        <Route exact path="/home" component={home} /><button id="Button" onClick={redirect} >
           Get Started
        </button></Switch>
        {/* <button id="Button" onClick={redirect} >
           Get Started
        </button> */}
        {/* <Link to="/home"><button id="Button"  >
           Get Started
        </button>
            </Link> */}
       
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

