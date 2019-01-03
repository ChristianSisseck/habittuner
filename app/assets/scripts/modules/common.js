class Common{

  static toDom(strHTML){
    let temp = document.createElement('template');
    temp.innerHTML = strHTML;
    return temp.content;
    }
}

export default Common;
/*
function toDom(strHTML) {
  let temp = document.createElement('template');
  temp.innerHTML = strHTML;
  return temp.content;
}
let d=document
    ,i
    ,a=d.createElement("div")
    ,b=d.createDocumentFragment();
a.innerHTML=markup;
while(i=a.firstChild)b.appendChild(i);
return b;
*/
