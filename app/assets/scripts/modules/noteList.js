import Common from './common';
import TextConverter from './textConverter';
import DatabaseFetch from './databaseFetch';
import CreateNoteBlock from './createNoteBlock';
import $ from 'Jquery';

class NoteList {

  constructor() {
    this.list = document.querySelector(".note-list");
    this.createNoteList();
    this.createClickEventOnNoteItem = this.createClickEventOnNoteItem.bind(this);
    this.deleteListElement = this.deleteListElement.bind(this);

  }

  async createNoteList() {



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
      Common.fillMainElement(note);
    })
  }

  deleteListElement(note) {
    let deleteItem = document.getElementById(note.Id)
    deleteItem.addEventListener("click", (e) => {
      e.target.closest(".note-list__element").remove();
      DatabaseFetch.deleteNote(note.Id);
    })
  }


}
export default NoteList;

/*${date}*/
