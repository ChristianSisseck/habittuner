import $ from 'Jquery';

class CreateNoteBlock{

  constructor(){
    alert("Trst");
    this.habitContainer = document.querySelector(".habit-container");
    this.headerButtonPlus = document.querySelector(".header__button-plus");
    this.headerButtonMinus = document.querySelector(".header__button-minus");
    this.clickHeaderButtonPlus = this.clickHeaderButtonPlus.bind(this);
    this.clickHeaderButtonMinus = this.clickHeaderButtonMinus.bind(this);
    this.clickHeaderButtonPlus();
    this.clickHeaderButtonMinus();
  }

  clickHeaderButtonPlus(){
    this.headerButtonPlus.addEventListener("click", () =>{
      this.buildMainElement();
    });
  }

  buildMainElement(){
    let divEl = document.createElement("li");
    this.habitContainerElement = $(divEl).addClass("habit-container__element");
    this.habitContainer.appendChild(divEl).innerHTML;
    this.buildMainElementsAttributes(divEl);
  }

  buildMainElementsAttributes(divEl){
    let inputEl = document.createElement("input");
    let textAreaEl = document.createElement("textarea");
    $(textAreaEl).attr("placeholder", "Type a note here!");
    $(textAreaEl).addClass("habit-container__textarea");
    $(inputEl).addClass("habit-container__headline  habit-container__text");
    $(inputEl).attr("placeholder", "Type headline here");
    divEl.appendChild(inputEl).innerHTML;
    divEl.appendChild(textAreaEl).innerHTML;
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
