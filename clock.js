const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
 // 근데 이건 계속 업데이트 해야 시간 변화 확인 가능. 다음 시간에 setInterval로 실시간 업데이트 확인예정.
};
/*setInterval(fn:하고싶은 function, 실행할 시간간격)
mini if. 만일 seconds가 10보다 작으면 0을 앞에 붙임
seconds < 10 ? `0${seconds}` : seconds; */
function init(){
 getTime();
 setInterval(getTime, 1000);
}

init();
