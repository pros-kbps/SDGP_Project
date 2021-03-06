import image from "../../assets/pic.jpeg";
import "../../styles/About.css";
import VMC from "./VMC";
import surami from '../../assets/surami.jpg';
import buhshika from '../../assets/Buhshika.jpg';
import Pavithra from '../../assets/Pavithra.jpeg';
import Kaveendra from '../../assets/Kaveendra.jpg';
import Prayon from '../../assets/Prayon.jpeg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



function About() {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img className="img" src={image} />

          <section className="py-4">
            <div className="container ">
              <div className="row">
                <div className="heading">
                  Our Project
                  <div className="underline mx-auto"></div>
                </div>

                <div className="col-md-8 mx-auto">
                  <div className="float-end">
                    <p className="texts">
                      Team Pros@kbps provides the cricket batsman's score
                      prediction of all the top 10 international teams.
                      Pros@kbps consists of five members studying in Information
                      Institute of Technology, were able to complete this
                      project together as a team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <VMC />

      <section className="section  border-top ">
        <Grid container rowSpacing={6} columnSpacing={{ xs: 15, sm: 5, md: 6 }}>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        alt="surami"
        height="350"
        img src={surami}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p>Surami Samarasekara</p>
          <p>IIT ID: 2019729</p>
          <p>UoW ID: w18102042</p>
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        alt="buhushika"
        height="350"
        img src={buhshika}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Buhushika Kumarage
          <p>IIT ID: 2019731</p>
          <p>UoW ID: w18098176</p>
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        alt="Pavithreini "
        height="350"
        img src={Pavithra}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <p>Pavithreini Ravichandran</p>
        <p>IIT ID: 20200530</p>
        <p>UoW ID: w18302149</p> 
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        alt="kaveendra"
        height="350"
        img src={ Kaveendra}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p>Kaveendra Wijenayaka</p>
          <p>IIT ID: 2019626</p>
          <p>UoW ID: w18097759</p> 
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
        component="img"
        alt="preyon"
        height="350"
        img src={Prayon}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p>Prayon Fernando</p>
          <p>IIT ID: 20191018</p>
          <p>UoW ID: w18098231</p> 
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
    
      </section>
    </div>
  );
}

export default About;