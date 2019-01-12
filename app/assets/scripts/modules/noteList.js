import Common from './common';
import TextConverter from './textConverter';
import DatabaseFetch from './databaseFetch';
import CreateNoteBlock from './createNoteBlock';

class NoteList {

  constructor() {
    this.list = document.querySelector(".note-list");
    this.createNoteList();
    this.createClickEventOnNoteItem = this.createClickEventOnNoteItem.bind(this);
    DatabaseFetch.deleteTextNote(1);
  }

  async createNoteList() {

    let data = await DatabaseFetch.getJsonFile();

    for (let i = 0; i <= data.length; i++) {

      let headlineText = data[i].HeadlineText;
      let dateTime = data[i].DateTime;
      let noteId = data[i].Id;
      let date = TextConverter.convertDateString(dateTime);
      let headline = TextConverter.convertHeadlineString(headlineText);

      this.list.appendChild(
        Common.toDom(`
          <div class="note-list__element note-list__element-text" id="${i}">
            <strong>${headline.toUpperCase()}</strong>  </br>
                    ${date}
            </div>
        `)
      )
      this.createClickEventOnNoteItem(i, data[i]);
    }
  }

  createClickEventOnNoteItem(i, data) {
    let noteItem = document.getElementById(i);
    noteItem.addEventListener("click", () => {
      Common.fillMainElement(i, data);
    })
  }


}
export default NoteList;

/*${date}*/
