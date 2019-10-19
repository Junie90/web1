const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
// querySelector는 HTML에서 필요한 것 얻는다는 의미.
const TODOS_LS = "toDos";

let toDos = [];
//to do는 항목이 많아질 수 있으므로 array로 만들어야.
//const에서 let으로 바꿔줌

function deleteToDo(event){
 const btn = event.target;
 const li = btn.parentNode
 //지워야 할 li인 btn.parentNode 만듬
 toDoList.removeChild(li);//li 삭제되지만 refresh하면 그대로.
 const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
    //모든 toDos가 li의 id와 같지 않을 때
    //parsInt
 });
 //filter는 array의 모든 아이템을 통해 함수 실행하고, true인 아이템들만 가지고 새로운 array 생성
 toDos = cleanToDos;
 //toDos를 cleanToDos로 바꿈. toDos는 old. cleanToDos는 new.
 saveToDos();//먼저 toDos를 cleanToDos로 바꾼담에 이걸 toDos에 저장. 
}
/*html li를 없애는 기능 만들기!
console.dir(event.target);로 parentnode 확인가능
delete child element mdn 구글링하면, removechild 나옴*/

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify는 자바스크립트 object를 string으로 바꿔줌
//JSON은 JavaScript Object Notation 의 준말
}

function paintToDo(text){
    const li = document.createElement("li") //HTML element 생성 method
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    /*delBtn 클릭 event 생성*/ 
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; //li에 id 줌.
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
         // toDos.length array의 갯수 확인가능
         id: newId
    };
    toDos.push(toDoObj); //toDos array에 toDoObj 추가
    saveToDos();//push다음에 calling해야 save할 게 있음. 
};

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // submit 같이 입력하고 enter 하면 새로고침됨

}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //console.log(loadedToDos)
        const parsedToDos = JSON.parse(loadedToDos)
        //console.log(parsedToDos);
        //앞에 console은 local storage에서 불러온건 string. parse는 object로!
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
        //forEach는 array에 있는 함수 하나씩 실행.
        //toDos를 가져온 뒤 가져온 것을 js의 object로 변환
        //각각에 대해서 paintToD라는 function 실행. 
    }
};

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();