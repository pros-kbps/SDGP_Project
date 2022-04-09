import React from "react";
import "./Player.css";

function Details(props) {
  return (
    <>
      <div class="columns">
        <div class="column">
          <img src={props.img} />
          <p className="name">{props.name} </p>
          <p className="country">{props.country}  |  {props.role}</p> <br></br>
  
        </div>


        <div class="column">
        <div className="profile">
            <p class= "span"> <span className="topic">FULL NAME - </span> <span className="answer"> &nbsp;{props.fullName}</span></p>
            <p class="span"><span className="topic">BORN - </span> <span className="answer"> &nbsp;{props.born}&emsp;</span></p> 
            <p class="span"><span className="topic">AGE - </span> <span className="answer"> &nbsp;{props.age}</span></p>
            <p class="span"><span className="topic">BATTING STYLE - </span> <span className="answer"> &nbsp;{props.battingStyle}</span></p>
            <p class="span"><span className="topic">BOWLING STYLE - </span> <span className="answer"> &nbsp;{props.bowlingStyle}</span></p>
            <p class="span"><span className="topic">PLAYING ROLE - </span> <span className="answer"> &nbsp;{props.role}</span></p>
            <p class="span"><span className="topic">HEIGHT - </span> <span className="answer"> &nbsp;{props.height}</span></p>
            <p class="span"><span className="topic">EDUCATION - </span> <span className="answer"> &nbsp;{props.education}</span></p>
        </div>
          
        </div>
      </div>

      <div className="div2">
      <table class="wp-table">
    <tr>
      <th>Career Averages</th>
      
    </tr>
    <tr className="columnNames">
      <td></td>
      <td>Span</td>
      <td>Mat</td>
      <td>Inns</td>
      <td>NO</td>
      <td>Runs</td>
      <td>HS</td>
      <td>Avg</td>
      <td>BF</td>
      <td>SR</td>
      <td>100s</td>
      <td>50s</td>
      <td>0s</td>
      <td>4s</td>
      <td>6s</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">Overview</td>
      <td>2012-2021</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    </table>
      </div>

      <div className="div2">
      <table class="wp-table">
    <tr>
      <th>vs Teams</th>
      
    </tr>
    <tr className="columnNames">
      <td></td>
      <td>Span</td>
      <td>Mat</td>
      <td>Inns</td>
      <td>NO</td>
      <td>Runs</td>
      <td>HS</td>
      <td>Avg</td>
      <td>BF</td>
      <td>SR</td>
      <td>100s</td>
      <td>50s</td>
      <td>0s</td>
      <td>4s</td>
      <td>6s</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs Australia</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs Bangladesh</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs England</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs India</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs New Zealand</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs Pakistan</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs South Africa</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs West Indies</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    <tr className="columnNames">
      <td className="rawName">vs Zimbabwe</td>
      <td>2012-2019</td>
      <td>76</td>
      <td>147</td>
      <td>5</td>
      <td>5620</td>
      <td>244</td>
      <td>39.57</td>
      <td>11213</td>
      <td>50.12</td>
      <td>14</td>
      <td>27</td>
      <td>12</td>
      <td>590</td>
      <td>9</td>
    </tr>
    </table>
      </div>
    </>
  );
}

export default Details;
