class Common {

  static toDom(strHTML) {
    let temp = document.createElement('template');
    temp.innerHTML = strHTML;
    return temp.content;
  }

  static fillMainElement(id, data) {

    let headlineText = document.querySelector(".habit-container__headline");
    let text  = document.querySelector(".habit-container__textarea");

    text.value = data.NoteText;
    headlineText.value = data.HeadlineText;

  }

}

export default Common;
