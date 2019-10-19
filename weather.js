const weather = document.querySelector(".js-weather");

const API_KEY = "5c85a391551dc10242746f7757e505d5";
//weather API map에서 가져온 api key. 
const COORDS = 'coords'

function getWeather(lat, lng){
 fetch(
     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`) /*주의: 따옴표가아닌 backtick(`) 사용할 것!*/ 
     .then(function(response){
         return response.json();
     }).then(function(json){
         //console.log(json); : 이걸로 하면 json 볼 수 있음
         const temperature = json.main.temp;
         const place = json.name;
         weather.innerText = `${temperature} @ ${place}`
     });
 
} 

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}//application tab에서 저장된 coords 확인 가능.이미 저장되어 있으니 새로고침해도 다시 묻지 x.

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, 
        longitude
    };
    /*객체에 변수의 이름과 객체의 key이름을 같게 저장할 때는 하나만 적을 수 있음. 
    latitude = latitude > latitude  */
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
} //위치정보 읽을 수 있게 하는 함수. 

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();

/*parse means...analyze a sentence into its parts and describe their syntactic roles 
an act of or the result obtained by parsing a string or a text*/