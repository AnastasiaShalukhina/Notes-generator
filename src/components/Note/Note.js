import React from "react";

class Note extends React.Component {

  render() {
    const props = this.props;

    return (

      <li>
        {props.text}
      </li>

    )
  }
}

export default Note;