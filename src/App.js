import React, { Component } from "react";
import Note from "./components/note";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: []
    };
  }

  addNote() {
    if (this.state.noteText !== "") {
      console.log(this.state.notes)
      let notes=this.state.notes;
      notes.push(this.state.noteText)
      this.setState({notes})
      this.setState({ noteText: "" });
      this.textInput.focus();
    }
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
       this.addNote();
    }
  };

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  render() {
    let notes =this.state.notes.map((val, key) => {
      console.log(val,key)
      return <Note key={key} text={val} delete={() => this.deleteNote(key)} />;
    });

    return (
      <div className="container">
        <div className="header">To do application</div>
        {notes}
        <div className="btn" onClick={this.addNote.bind(this)}>
          +
        </div>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
