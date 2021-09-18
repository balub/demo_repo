const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// // Box width
// var bw = 512;
// // Box height
// var bh = 512;

// function drawBoard() {
//   ctx.lineWidth = 1;
//   ctx.strokeStyle = "rgb(2,7,159)";
//   for (var x = 0; x < bw; x += 90) {
//     for (var y = 0; y < bh; y += 90) {
//       ctx.strokeRect(x + 10, y + 10, 90, 90);
//     }
//   }
// }
// drawBoard();
ctx.font = "48px serif";

// ctx.strokeRect(0, 0, 512, 512);
// ctx.strokeRect(512, 0, 512, 512);

// ctx.strokeRect(512 * 2, 0, 512, 512);

// ctx.strokeRect(0, 512, 512, 512);
// ctx.strokeRect(512, 512, 512, 512);
// ctx.strokeRect(512 * 2, 512 * 2, 512, 512);

// ctx.strokeRect(0, 512 * 2, 512, 512);
// ctx.strokeRect(512 * 2, 512 * 2, 512, 512);
// ctx.strokeRect(512 * 3, 512 * 3, 512, 512);

function draw() {
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      let x2 = x * 512;
      let y2 = y * 512;
      ctx.strokeRect(x * 512, y * 512, 512, 512);
      //   ctx.strokeText(`${x},${y}`, (x2 - x) / 2, (y2 - y) / 2);
    }
  }
}
draw();

canvas.addEventListener("mousedown", function (event) {
  dragStart = {
    x: event.pageX,
    y: event.pageY,
  };
  drag = true;
});

canvas.addEventListener("mousemove", function (event) {
  if (drag) {
    dragEnd = {
      x: event.pageX,
      y: event.pageY,
    };
    ctx.translate(dragEnd.x - dragStart.x, dragEnd.y - dragStart.y);
    dragStart = dragEnd;
    draw();
  }
});

canvas.addEventListener("mouseup", function (event) {
  drag = false;
});
