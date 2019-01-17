import $ from 'Jquery';
import Common from './common'; // Filer der ikke ligger i npm modules, skal have ./ foran
import DatabaseFetch from './databaseFetch';
import Save from './save';

class CreateNoteBlock {

  constructor() {
    this.habitContainer = document.querySelector(".habit-container");
    this.headerButtonPlus = document.querySelector(".header__button-plus");
    this.clickHeaderButtonPlus = this.clickHeaderButtonPlus.bind(this);
    this.closeTextBox = this.closeTextBox.bind(this);
    this.textBoxOpen = false;
    this.buildMainElement();
    this.clickHeaderButtonPlus();
    this.closeTextBox();
    this.clickSaveButton = this.clickSaveButton.bind(this);
    this.clickUpdateButton = this.clickUpdateButton.bind(this);
    this.updateButton = document.querySelector(".habit-container__update-button");
    this.saveButton
    this.closeIcon;

  }

  clickHeaderButtonPlus() {
    this.headerButtonPlus.addEventListener("click", () => {
      this.buildMainElement();
    });
  }


  buildMainElement() {
    console.log("buildMainElement");
     this.saveButton = document.querySelector(".habit-container__save-button");
     let el = document.querySelector(".habit-container__element")
     $(el).show();
     Common.changeButton("save");
     this.textBoxOpen = true;
     this.clickSaveButton();
     let headlineText = document.querySelector(".habit-container__headline");
     let text = document.querySelector(".habit-container__textarea");
     headlineText.value = "";
     text.value = "";

  }

  clickSaveButton() {
    this.saveButton.addEventListener("click", () => {
      Save.saveNote();
    });
  }
  clickUpdateButton(note) {
    this.updateButton.addEventListener("click", () => {
      alert("Fedt nok jo :)")
      Save.updateNote(note);
    });
  }

  closeTextBox() {
    let closeIcon = document.querySelector(".habit-container__close-icon")

    closeIcon.addEventListener("click", ()=> {
      let el = document.querySelector(".habit-container__element")
      $(el).hide();
    })


  }
}

export default CreateNoteBlock;
