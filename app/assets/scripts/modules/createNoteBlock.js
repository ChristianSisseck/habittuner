import $ from 'Jquery';
import Common from './common'; // Filer der ikke ligger i npm modules, skal have ./ foran
import * as JsonFiles from './jsonFiles';

class CreateNoteBlock{

  constructor(){
    this.habitContainer = document.querySelector(".habit-container");
    this.headerButtonPlus = document.querySelector(".header__button-plus");
    this.headerButtonMinus = document.querySelector(".header__button-minus");
    this.clickHeaderButtonPlus = this.clickHeaderButtonPlus.bind(this);
    this.clickHeaderButtonMinus = this.clickHeaderButtonMinus.bind(this);
    this.clickHeaderButtonPlus();
    //this.clickHeaderButtonMinus();
  }

  clickHeaderButtonPlus(){
    this.headerButtonPlus.addEventListener("click", () =>{
      this.buildMainElement();
    });
  }

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

  clickHeaderButtonMinus(){
    this.headerButtonMinus.addEventListener("click", () =>{
     let list = document.getElementsByTagName('ul')[0];
     let lengthLi = document.getElementsByTagName('li').length;
     let removeMe = document.getElementsByTagName('li')[lengthLi-1];
     list.removeChild(removeMe);

    });
  }

   }



export default CreateNoteBlock;




/*
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
