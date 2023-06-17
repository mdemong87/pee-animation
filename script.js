var baby1 =document.querySelector(".baby1");
var baby2 =document.querySelector(".baby2");
var baby3 =document.querySelector(".baby3");
var baby4 =document.querySelector(".baby4");

var peeing1 =document.querySelector(".babyPeeing1");
var peeing2 =document.querySelector(".babyPeeing2");
var peeing3 =document.querySelector(".babyPeeing3");
var peeing4 =document.querySelector(".babyPeeing4");




baby1.addEventListener("click",()=>{
    peeing1.style.display="block";
    peeing2.style.display="none";
    peeing3.style.display="none";
    peeing4.style.display="none";
})

baby2.addEventListener("click",()=>{
    peeing1.style.display="none";
    peeing2.style.display="block";
    peeing3.style.display="none";
    peeing4.style.display="none";
})

baby3.addEventListener("click",()=>{
    peeing1.style.display="none";
    peeing2.style.display="none";
    peeing3.style.display="block";
    peeing4.style.display="none";
})

baby4.addEventListener("click",()=>{
    peeing1.style.display="none";
    peeing2.style.display="none";
    peeing3.style.display="none";
    peeing4.style.display="block";
})