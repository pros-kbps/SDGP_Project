import "../../styles/Card.css";
import Grid from '@mui/material/Grid';


const Card = () => {
  return (
    <Grid container justifyContent="center" >
      <div className="card">
          <h1>Prediction Results</h1>
          <div className="card__body">
            <p>Date: </p>
            <p>Team1: </p>
            <p>Team2: </p>
            <b>Winning Team: </b>
          </div>
      </div>
    </Grid>
  )
};

export default Card;
