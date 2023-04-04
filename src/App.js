import React from "react";
import AddField from "./components/AddField/AddField";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          text: 'This the first note. Here you can create, update and delete your note. Also you may mark your text with #hastag. List with all hastags will be beneath your notes',
          hashtags: [],
          id: 1,
        }
      ],
    }
    this.maxId = 2
  }

  render() {
    return (
      <div>
        <AddField />
        <div className="notes-container">

        </div>
      </div>
    )
  }
}

export default App;
