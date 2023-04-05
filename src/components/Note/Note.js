import React from "react";
import './note.scss';

class Note extends React.Component {

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <li className="note">
          {props.text}
        </li>
        <div className="note__btn-container">
          <button className="note__btn">Edit Note</button>
          <button
            className="note__btn_colored"
            onClick={props.onDelete}
          >Delete Note</button>
        </div>
      </React.Fragment>


    )
  }
}

export default Note;