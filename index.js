let slideShowElements = document.querySelectorAll(".slide-show-element");
let countElements = 1;
setInterval(() => {
    countElements ++;
    let currectElemtens = document.querySelector(".current");
    currectElemtens.classList.remove("current");
    if(countElements > slideShowElements.length){
        slideShowElements[0].classList.add("current");
    }else{
        currectElemtens.nextElementSibling.classList.add("current");
    }},2000)