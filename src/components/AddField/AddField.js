import React from "react";
import "./addField.scss";

import bold from '../../assets/images/bold.png';
import italic from '../../assets/images/italic.png';

class AddField extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="addField__wrapper">
          <form>
            <legend className="addField__legend">Type your node below</legend>
            <div className="addField__tools">
              <img src={bold} className="addField__image" alt="Big letter B"></img>
              <img src={italic} className="addField__image" alt="Big letter I"></img>
            </div>
            <textarea className="addField__field"></textarea>
            <button type="submit" className="addField__button">Add Note</button>
          </form>

        </div>
      </React.Fragment>
    )
  }

}

export default AddField;