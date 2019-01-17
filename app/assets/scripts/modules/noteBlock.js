import $ from 'Jquery';
import Common from './common'; // Filer der ikke ligger i npm modules, skal have ./ foran
import DatabaseFetch from './databaseFetch';
import Save from './save';
import NoteList from "./noteList";

class NoteBlock {

  constructor() {

    // ***closeTextBox()
    this.habitContainerCloseIcon = document.querySelector(".habit-container__close-icon");
    this.habitContainerElement = document.querySelector(".habit-container__element");
    this.closeTextBox = this.closeTextBox.bind(this);
    this.closeTextBox();

    // ***clickSaveButton()
    this.saveButton = document.querySelector(".habit-container__save-button");
    this.clickSaveButton = this.clickSaveButton.bind(this);
    this.clickSaveButton();

    // ***clickUpdateButton()
    this.updateButton = document.querySelector(".habit-container__update-button");
    this.clickUpdateButton = this.clickUpdateButton.bind(this);
    this.clickUpdateButton();

    // ***newNote()
    this.newNoteButton = document.querySelector(".header__button-plus");
    this.newNote = document.querySelector(".habit-container__element");
    // Select headline and text fields to empty them after click
    this.headlineText = document.querySelector(".habit-container__headline");
    this.textarea = document.querySelector(".habit-container__textarea");
    this.clickNewNote = this.clickNewNote.bind(this);
    this.clickNewNote();


    //***Common
    Common.changeButton("save");

  }


  clickNewNote() {
    this.newNoteButton.addEventListener("click", () => {
      this.headlineText.value = "";
      this.textarea.value = "";
      Common.changeButton("save");

      $(this.newNote).show();
    });
  }

  clickSaveButton() {
    this.saveButton.addEventListener("click", () => {
      console.log("save")
      Save.saveNote();
      this.headlineText.value = "";
      this.textarea.value = "";
    });
  }
  clickUpdateButton() {
    this.updateButton.addEventListener("click", () => {
      console.log("Update")

      let noteId = document.querySelector(".habit-container").id;
      let headlineText = this.headlineText.value;
      let noteText = this.textarea.value;

       console.log(noteId);


        DatabaseFetch.updateTextNote(noteId, noteText, headlineText);



    });
  }

  closeTextBox() {
    this.habitContainerCloseIcon.addEventListener("click", () => {
      $(this.habitContainerElement).hide();
    })

  }
}

export default NoteBlock;
