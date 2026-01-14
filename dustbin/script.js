const card = document.getElementById("card");

let holdTimer;

card.addEventListener("mousedown", start);
card.addEventListener("touchstart", start);

card.addEventListener("mouseup", cancel);
card.addEventListener("mouseleave", cancel);
card.addEventListener("touchend", cancel);

function start(){
  card.classList.add("active");

  holdTimer = setTimeout(() => {
    card.classList.remove("active");
  }, 2800);
}

function cancel(){
  clearTimeout(holdTimer);
  card.classList.remove("active");
}
