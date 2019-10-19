const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}
//toggle은 class가 있는지 체크해서 있으면 add. 없으면 remove. 

function init(){
  title.addEventListener("click", handleClick);
}
init();
/*classList에서는 method 가진다. 그래서 function 있음. 
*/

