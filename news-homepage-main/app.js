let btnInput = document.getElementById("open-menu");
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-bars")) {
    console.log("clicked");
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  } else if (e.target.classList.contains("fa-times")) {
    document.body.style.overflow = "visible";
    document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
  }
});
