const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    // 쿼리셀렉터 all은 모든걸 가져온다. 클래스명에 따른 element를 가져옴.
    //local storage : 정보 저장되는 것
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);//사용자 이름 저장하도록 함!
}

function handleSubmit(event){
    event.preventDefault();
    //preventDefault 메소드는 원래 event가 가지고 있는 속성 막아줌.
    //그래서 원래 form에 input 적고 enter 치면 새로고침 되는데
    //preventDefault 하니까 아무일도 일어나지 않음.
    const currentValue = input.value;
    paintGreeting(currentValue);
    //console.log(currentValue); //input에 적은 value가 console에 나옴
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
        askForName();
    } else {
        paintGreeting(currentUser);
        // she is
    }
};

function init(){
  loadName();
};

init();