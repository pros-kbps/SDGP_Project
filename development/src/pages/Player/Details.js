import React from "react";
import "./Player.css";

function Details(props) {

  let setArray =(e)=>{
    console.log (e);
    if(e){
      if(e.length>0){
        return e[0]; 
      }
    }
    return "";
  }
  
  return (
    <>
      <div class="columns">
        <div class="column">
          <img src={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/" + props.image?.url } />
          <p className="name">{props.name} </p>
          <p className="country">{props.countryName}  |  {props.playingRole}</p> <br></br>
  
        </div>


        <div class="column">
        <div className="profile">
            <p class= "span"> <span className="topic">FULL NAME - </span> <span className="answer"> &nbsp;{props.fullName}</span></p>
            <p class="span"><span className="topic">BORN - </span> <span className="answer"> &nbsp;{props.dateOfBirth?.year}-{props.dateOfBirth?.month}-{props.dateOfBirth?.date}&emsp;</span></p> 
            <p class="span"><span className="topic">AGE - </span> <span className="answer"> &nbsp;{new Date().getFullYear() -props.dateOfBirth?.year}</span></p>
            <p class="span"><span className="topic">BATTING STYLE - </span> <span className="answer"> &nbsp;{setArray(props.battingStyles)}</span></p>
            <p class="span"><span className="topic">BOWLING STYLE - </span> <span className="answer"> &nbsp;{setArray(props.bowlingStyles)}</span></p>
            <p class="span"><span className="topic">PLAYING ROLE - </span> <span className="answer"> &nbsp;{props.playingRole}</span></p>
            <p class="span"><span className="topic">HEIGHT - </span> <span className="answer"> &nbsp;{props.height} {props.heightUnit}</span></p>
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
    {props.careerAvg.map((value, index) => {
        return <tr className="columnNames">
        <td className="rawName">Overview</td>
        <td>{value.sp}</td>
        <td>{value.mt}</td>
        <td>{value.in}</td>
        <td>{value.no}</td>
        <td>{value.rn}</td>
        <td>{value.hs}</td>
        <td>{value.bta}</td>
        <td>{value.bf}</td>
        <td>{value.btsr}</td>
        <td>{value.hn}</td>
        <td>{value.ft}</td>
        <td>{value.dk}</td>
        <td>{value.fo}</td>
        <td>{value.si}</td>
      </tr>
      })}

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
    {props.vsTeamStats.map((value, index) => {
        return <tr className="columnNames">
        <td className="rawName">{value.tt}</td>
        <td>{value.sp}</td>
        <td>{value.mt}</td>
        <td>{value.in}</td>
        <td>{value.no}</td>
        <td>{value.rn}</td>
        <td>{value.hs}</td>
        <td>{value.bta}</td>
        <td>{value.bf}</td>
        <td>{value.btsr}</td>
        <td>{value.hn}</td>
        <td>{value.ft}</td>
        <td>{value.dk}</td>
        <td>{value.fo}</td>
        <td>{value.si}</td>
      </tr>
      })}
    
    </table>
      </div>
    </>
  );
}

export default Details;
