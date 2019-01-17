import $ from 'Jquery';
import CreateNoteBlock from './createNoteBlock';
class Common {

  static toDom(strHTML) {
    let temp = document.createElement('template');
    temp.innerHTML = strHTML;
    return temp.content;
  }

  static fillMainElement(note) {

      const instansOfCreateNoteBlock = new CreateNoteBlock;
      instansOfCreateNoteBlock.buildMainElement();
      instansOfCreateNoteBlock.clickUpdateButton(note);

      let headlineText = document.querySelector(".habit-container__headline");
      let text = document.querySelector(".habit-container__textarea");

      text.value = note.NoteText;
      headlineText.value = note.HeadlineText;
      this.changeButton("update");
    }

    static changeButton(button) {

      let saveButton = document.querySelector(".habit-container__save-button");
      let updateButton = document.querySelector(".habit-container__update-button");

      if (button === "update") {
        $(saveButton).hide();
        $(updateButton).show();
      } else {
        $(saveButton).show();
        $(updateButton).hide();
      }

    }


  }

  export default Common;
