const redB = document.querySelector(".redBtn");
const greenB = document.querySelector(".greenBtn");
const blueB = document.querySelector(".blueBtn");
const txt = document.querySelector(".textBox");



function reder(){
 
txt.style.color= "red" ;

}

function greener(){
 
    txt.style.color= "green" ;
    
    }

    function bluer(){
 
        txt.style.color= "blue" ;
        
        }

redB.addEventListener("click",reder)
greenB.addEventListener("click",greener)
blueB.addEventListener("click",bluer)