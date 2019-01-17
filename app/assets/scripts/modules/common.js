import $ from 'Jquery';
class Common {

  static toDom(strHTML) {
    let temp = document.createElement('template');
    temp.innerHTML = strHTML;
    return temp.content;
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
