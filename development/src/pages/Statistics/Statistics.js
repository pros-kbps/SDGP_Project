import React from "react";
import NameList from "./NameList";
import { playerOne, playerTwo, playerThree } from "./Data";

function Statistics() {
  return (
    <React.Fragment>
      <div>
        <br></br>
        <hr></hr>
        <br></br>

        <h1>Choose a Country</h1>
        <div class="select">
          <select name="country" id="country">
            <option selected disabled>
              Choose a Country
            </option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Australia">Australia</option>
            <option value="New Zeland">New Zeland</option>
            <option value="Pakistan">Pakistan</option>
            <option value="South Africa">South Africa</option>
          </select>
        </div>
      </div>
      

      

      <div>
        <NameList {...playerOne} />
        <NameList {...playerTwo} />
        <NameList {...playerThree} />
      </div>
    </React.Fragment>
  );
}

export default Statistics;
