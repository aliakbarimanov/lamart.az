const leftButton = document.querySelector("#leftArrow");
const rightButton = document.querySelector("#rightArrow");
var idx = 0;

let slideImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
];


window.onload = goSlider;
const corusel = setInterval("goSlider()", 2500);


leftButton.onclick = () => {
    idx--;

    if(idx < 0){

        /* burada index uzunluqdan 1 vahid az olmalidir ki, massivde sonuncunu versin. */
        idx = slideImages.length - 1;
    }

    var imgSrc = slideImages[idx];
    document.slide.src = "img/slider/" + imgSrc;

    clearInterval(corusel);
    // setInterval("goSlider()", 2500);
}

rightButton.onclick = () => {
    idx++;

    if(idx > slideImages.length - 1){
        idx = 0;
    }

    var imgSrc = slideImages[idx];
    document.slide.src = "img/slider/" + imgSrc;

    clearInterval(corusel);
    // setInterval("goSlider()", 2500);
}


var idx = -1;
function goSlider(){
    idx++;

    if(idx > slideImages.length - 1){
        idx = 0;
    }

    var imgSrc = slideImages[idx];
    document.slide.src = "img/slider/" + imgSrc;
}