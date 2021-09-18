const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 512;
canvas.width = 512 * 3;

let start_pos = {
  x: 0,
  y: 0,
};

let end_pos = {
  x: 0,
  y: 0,
};
let disX = 0;

canvas.addEventListener("mousedown", (event) => {
  start_pos.x = event.x;
  start_pos.y = event.y;
  document.getElementById("x_value").innerText = `start X:${event.x}`;
  document.getElementById("y_value").innerText = `start Y:${event.y}`;
});

canvas.addEventListener("mouseup", (event) => {
  end_pos.x = event.x;
  end_pos.y = event.y;
  document.getElementById("x1_value").innerText = `End X:${event.x}`;
  document.getElementById("y1_value").innerText = `End Y:${event.y}`;

  disX = Math.sqrt(
    (end_pos.x - start_pos.x) * (end_pos.x - start_pos.x) +
      (end_pos.y - start_pos.y) * (end_pos.y - start_pos.y)
  );
  document.getElementById("dis2").innerText = `x2-x1 = ${
    end_pos.x - start_pos.x
  } y2-y1 =${end_pos.y - start_pos.y}`;

  document.getElementById("dis").innerText = `Distance between points ${disX} `;
  document.getElementById("dis1").innerText = `in Image units${Math.floor(
    disX / 512
  )} `;
  draw();
});

function draw() {
  if (Math.floor(disX / 512) > 1) {
    alert(`get new image ${Math.floor(disX / 512)}`);
  }

  function nothing(){
    // this function does nothing
  }
}
