// $(".set-color").click(function() {
//   let elem_box = document.querySelector(".box");
//   elem_box.style.backgroundColor = "black";
// });
let elem_box = document.querySelector(".brush-box");
document.querySelector(".set-color").addEventListener("click", event => {
  event.preventDefault;
  elem_box.style.backgroundColor = "black";
});

$(".brush-box").keyup(function(event) {
  if (event.keyCode === 13) {
    document.querySelector(".set-color").click();
  }
});

function display_square(event) {
  event.target.style.backgroundColor = elem_box.value;
}

for (let i = 0; i < 100; i++) {
  let square = document.createElement("div");
  square.setAttribute("class", "square");
  square.style.width = "20px";
  square.style.height = "20px";
  square.addEventListener("click", event => {
    display_square(event);
  });
  document.querySelector("body").appendChild(square);
}
