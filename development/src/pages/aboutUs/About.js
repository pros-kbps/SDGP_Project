import image from "../../assets/pic.jpeg";
import "../../styles/About.css";
import VMC from "./VMC";
import surami from '../../assets/surami.jpg';
import buhshika from '../../assets/Buhshika.jpg';
import Pavithra from '../../assets/Pavithra.jpeg';
import Kaveendra from '../../assets/Kaveendra.jpg';
import Prayon from '../../assets/Prayon.jpeg';


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
        <div className="container">
          <div className="Profile">
          <div className="row">
            <div className="col-md-15 mb-3 text-center">
              <h3 className="main-heading">Our Team</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                
                <img src={surami} className="w-8 p-3 border-bottom" alt="Surami" />
                
                <div className="card-body">
                  <p className="info">SURAMI SAMARASEKERA 
                    <br />
                    (Pros@kbps leader)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                
                <img src={buhshika} className="w-8 p-3 border-bottom" alt="Buhshika" />
                
                <div className="card-body">
                  <p className="info">BUHUSHIKA KUMARAGE 
                  <br />
                  (Pros@kbps member)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                <img src={Pavithra} className="w-8 p-3 border-bottom" alt="Pavithreini" />
                <div className="card-body">
                  <p className="info">PAVITHREINI RAVICHANDRAN 
                  <br />
                  (Pros@kbps member)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                <img src={Kaveendra} className="w-8 p-3 border-bottom" alt="Kaveendra" />
                <div className="card-body">
                  <p className="info">KAVEENDRA WIJENAYAKA 
                  <br />
                  (Pros@kbps member)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                <img src={Prayon} className="w-8 p-3 border-bottom" alt="Prayon" />
                <div className="card-body">
                  <p className="info">PRAYON FERNANDO 
                  <br />
                  (Pros@kbps member)
                  </p>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;