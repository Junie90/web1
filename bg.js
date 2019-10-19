const body = document.querySelector("body");

const IMG_NUMBER = 5;

/*function handleImgLoad(){
    console.log("finished loading");
} API에서는 필요. */

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);
    /*image.addEventListener("loadend", handleImgLoad); API에서는 필요. */
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    //그림 3장이니까. 0, 1, 2
    return number;
}

function init(){
 const randomNumber = genRandom();
 paintImage(randomNumber)
};
/*Math.random()
Math.floor()
Math.ceil()*/
init();