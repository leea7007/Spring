var box = document.querySelector(".box");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

function outterDisplay(){
    pageX.innerText = "마우스가 도망갔어요.";
    pageY.innerText = "늦기 전에 잡아와요!";
}


box.addEventListener("mousemove", updateDisplay, false);
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", outterDisplay, false);