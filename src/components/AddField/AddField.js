import React from "react";
import "./addField.scss";

import bold from '../../assets/images/bold.png';
import italic from '../../assets/images/italic.png';

class AddField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.props.onAdd(this.state.text);
    }
    this.setState({
      text: "",
    })
  }

  onTyping = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    const text = this.state.text;

    return (
      <React.Fragment>
        <div className="addField__wrapper">
          <form onSubmit={this.onSubmit}>
            <legend className="addField__legend">Type your node below</legend>
            <div className="addField__tools">
              <img src={bold} className="addField__image" alt="Big letter B"></img>
              <img src={italic} className="addField__image" alt="Big letter I"></img>
            </div>
            <textarea
              className="addField__field"
              onChange={this.onTyping}
              value={text}
            ></textarea>
            <button type="submit" className="addField__button">Add Note</button>
          </form>

        </div>
      </React.Fragment>
    )
  }

}

export default AddField;