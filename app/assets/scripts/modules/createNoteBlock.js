import $ from 'Jquery';
import Common from './common'; // Filer der ikke ligger i npm modules, skal have ./ foran
import DatabaseFetch from './databaseFetch';
import Save from './save';

class CreateNoteBlock {

  constructor(){
    this.habitContainer = document.querySelector(".habit-container");
    this.headerButtonPlus = document.querySelector(".header__button-plus");
    this.clickHeaderButtonPlus = this.clickHeaderButtonPlus.bind(this);
    this.closeTextBox = this.closeTextBox.bind(this);
    this.textBoxOpen = false;
    this.buildMainElement();
    this.clickHeaderButtonPlus();
    this.closeTextBox();
    this.clickSaveButton = this.clickSaveButton.bind(this);
    this.saveButton
    this.closeIcon;

  }

  clickHeaderButtonPlus() {
    this.headerButtonPlus.addEventListener("click", () => {
      this.buildMainElement();
    });
  }


  buildMainElement() {
    if (this.textBoxOpen == false) {
      this.habitContainer.appendChild(
        Common.toDom(`
              <li class="habit-container__element">
                <div class="habit-container__close-icon">
                    <div class="habit-container__close-icon__first_cross"> </div>
                    <div class="habit-container__close-icon__second_cross"> </div>
                 </div>
                <input class="habit-container__headline habit-container__text " placeholder="Type a headline!">
                <textarea placeholder="Type a note here!" class="habit-container__textarea"></textarea>
                <div class="habit-container__save-button"> <button class="w3-button w3-black">Save</button>
               </div>
            </li>

            `)
      )
    }
    this.closeIcon = document.querySelector(".habit-container__close-icon");
    this.closeTextBox();
    this.textBoxOpen = true;
    this.saveButton = document.querySelector(".habit-container__save-button");
    this.clickSaveButton();

  }

  clickSaveButton(){
    this.saveButton.addEventListener("click", ()=>{
      Save.saveNote();
      console.log("hello there");
    });
  }

  closeTextBox() {
    this.closeIcon.addEventListener("click", () => {
      let text = document.querySelector(".habit-container__headline").value;
      let headlineText = document.querySelector(".habit-container__textarea").value;
      DatabaseFetch.sendTextNote(text, headlineText);


      let list = document.getElementsByTagName('ul')[0];
      let lengthLi = document.getElementsByTagName('li').length;
      let removeMe = document.getElementsByTagName('li')[lengthLi - 1];
      list.removeChild(removeMe);
      this.textBoxOpen = false;
    });
  }
}



export default CreateNoteBlock;


//document.querySelector(".habit-container__close-icon");

//el.addEventListener("click", function(){




/*


async buildMainElement(){
let data = await JsonFiles.getJsonFile();

  this.habitContainer.appendChild(
    Common.toDom(`
      <li class="habit-container__element">
        <div class="habit-container__close-icon">
            <div class="habit-container__close-icon__first_cross"> </div>
            <div class="habit-container__close-icon__second_cross"> </div>
         </div>
        <input class="habit-container__headline habit-container__text " placeholder="Type a headline!">
        <textarea placeholder="Type a note here!" class="habit-container__textarea"></textarea>
    </li>

    `)
  )
}




for(let i  = 1; i <= 10; i++){
    // Skal kunne i søvne
    let el = document.createElement("div")
    el.innerHTML = i;
    // Skal kunne i søvne
    el.addEventListener("click", function(){
      alert(i);
    });
    // ligegyldigt om det er en klasse eller et id,
    // eller et element med en bestemt attribute.
    document.querySelector("#ost").appendChild(el);*/
