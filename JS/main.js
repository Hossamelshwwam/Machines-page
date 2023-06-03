let other = document.getElementById("other");
let mega = document.querySelector(".mega-menu");
let x = false;

other.addEventListener("click", function () {
  if (!x) {
    mega.style.transform = "translateY(1px)";
    mega.style.zIndex = 2;
    mega.style.opacity = 1;
    x = !x;
  } else {
    mega.style.transform = "translateY(150px)";
    mega.style.zIndex = -1;
    mega.style.opacity = 0;
    x = !x;
  }
});
