import React from "react";
import AddField from "./components/AddField/AddField";
import NotesList from "./components/NotesList/NotesList";

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

  addNote = (text) => {
    const newNote = {
      text: text,
      id: this.maxId++,
    }

    this.setState(({ data }) => {
      const newData = [...data, newNote]
      return {
        data: newData
      }
    })
  }

  deleteNote = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((note) => note.id !== id)
      }
    })
  }

  render() {

    const data = this.state.data; // [{}, {} ... {}]

    return (
      <div>
        <AddField onAdd={this.addNote} />
        <div className="notes-container">
          <NotesList
            data={data}
            onDelete={this.deleteNote} />
        </div>
      </div>
    )
  }
}

export default App;
