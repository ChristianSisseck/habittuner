import Common from './common';
import TextConverter from './textConverter';
import DatabaseFetch from './databaseFetch';
import $ from 'Jquery';

class NoteList {

  constructor() {

    this.list = document.querySelector(".note-list");
    this.createClickEventOnNoteItem = this.createClickEventOnNoteItem.bind(this);
    this.deleteListElement = this.deleteListElement.bind(this);
    this.createNoteList = this.createNoteList.bind(this);
    this.createNoteList();

  }

  async createNoteList() {

    this.list.innerHTML = "";
    //let list = document.querySelector(".note-list");

    let notes = await DatabaseFetch.getJsonFile();

    for (let note of notes) {
      console.log("noteItem");
      let headlineText = note.HeadlineText;
      let dateTime = note.DateTime;
      let noteId = note.Id;
      let date = TextConverter.convertDateString(dateTime);
      let headline = TextConverter.convertHeadlineString(headlineText);

      let listElement = Common.toDom(`
          <div class="note-list__element note-list__element-text note-list__hover" id="${noteId}element">
            <strong>${headline.toUpperCase()}</strong>  </br>
                    ${date}

                    <div class="note-list__close-icon note-list__hover" id="${noteId}">
                    <div class="note-list__first_cross"> </div>
                    <div class="note-list__second_cross"> </div>
                    </div>
            </div>
        `)
      this.list.appendChild(listElement);
      this.deleteListElement(note);
      this.createClickEventOnNoteItem(note);
    }
  }

  createClickEventOnNoteItem(note) {
    let noteItem = document.getElementById(note.Id + "element");
    noteItem.addEventListener("click", () => {
      this.fillNoteElement(note);
    })
  }

  fillNoteElement(note) {
    let headlineText = document.querySelector(".habit-container__headline");
    let text = document.querySelector(".habit-container__textarea");

    let habitContainer = document.querySelector(".habit-container");

    text.value = note.NoteText;
    headlineText.value = note.HeadlineText;
    habitContainer.id = note.Id;

    console.log(note.Id);


    Common.changeButton("update");
  }

  deleteListElement(note) {
    let deleteItem = document.getElementById(note.Id)
    deleteItem.addEventListener("click", (e) => {
      e.target.closest(".note-list__element").remove();
      DatabaseFetch.deleteNote(note.Id);

      //Binds list to the class again, this makes the list work after removing the last element
      this.list

    })
  }


}
export default NoteList;

/*${date}*/
