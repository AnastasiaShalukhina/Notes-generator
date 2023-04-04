import React from "react";
import Note from "../Note/Note";

class NotesList extends React.Component {

  formNotesListToRender(notesArray) {
    const notes = notesArray.map((note) => {
      const { id, ...noteProps } = note;
      return <Note
        key={id}
        {...noteProps}
      />
    })

    return notes
  }


  render() {
    const notesList = this.props.data; // [{}, {} ... {}]
    const notes = this.formNotesListToRender(notesList);

    return (
      <ul>
        {notes}
      </ul>
    )
  }
}

export default NotesList;