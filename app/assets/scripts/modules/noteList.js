import Common from './common';
import TextConverter from './textConverter';
import * as JsonFiles from './jsonFiles';
import CreateNoteBlock from './createNoteBlock';

class NoteList {

  constructor() {
    this.textConverter = new TextConverter();
    this.list = document.querySelector(".note-list");
    this.createNoteList();
    this.createClickEventOnNoteItem = this.createClickEventOnNoteItem.bind(this);
  }

  async createNoteList() {

    let data = await JsonFiles.getJsonFile();

    for (let i = 0; i <= 10; i++) {

      let headlineText = data[i].HeadlineText;
      let noteId = data[i].Id;
      //let date = this.textConverter.convertDateString(data[0].DateTime);
      let headline = this.textConverter.convertHeadlineString(headlineText);

      this.list.appendChild(
        Common.toDom(`
          <div class="note-list__element note-list__element-text" id="${i}">
          ${headline}
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
