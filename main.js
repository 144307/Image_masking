document.onmousemove = handleMouseMove;
let mask = document.querySelector(".test");

function handleMouseMove(event) {
  console.log(event.clientX);
  console.log(event.clientY);
  let posX = event.clientX - 200;
  let posY = event.clientY - 200;
  mask["style"].left = posX + "px";
  mask["style"].top = posY + "px";
}
