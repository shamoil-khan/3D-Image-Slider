const slider = document.querySelector(".slider"),
  items = slider.querySelectorAll(".item");

let y = 0;
let x = 0;
let active = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    y += 36;
    slider.setAttribute("style", `--quantity: 10; --y:${y}deg`);
  }
  if (e.key === "ArrowLeft") {
    y -= 36;
    slider.setAttribute("style", `--quantity: 10; --y:${y}deg`);
  }
});

items.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    active = true;

    if (e.button === 0) {
      x = e.pageX - window.innerWidth / 2;
    }
  });
});

document.addEventListener("mouseup", (e) => {
  if (active) {
    active = false;
    if (e.button === 0) {
      let offsetX = e.pageX - window.innerWidth / 2;

      if (offsetX > x) {
        y += 36;
        slider.setAttribute("style", `--quantity: 10; --y:${y}deg`);
      } else if (offsetX < x) {
        y -= 36;
        slider.setAttribute("style", `--quantity: 10; --y:${y}deg`);
      } else {
        console.log("nothing");
      }
    }
  }
});
