
var element = document.getElementById("img1");

element.addEventListener("click",function(){



    element.style.animationPlayState = "running";

    var x=document.getElementById("click");
    x.style.display ="none";
    timeout = setTimeout(function(){
        x.style.display = "block";
        if (x.innerHTML === "*please click me to release !") {
            x.innerHTML = "Bye bye!! Thank you!";
        }
    },1500);

    
})