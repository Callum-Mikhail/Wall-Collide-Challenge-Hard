// Wall Collide Challenge Hard

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
// Variables
let p1 = {
  x: 200,
  y: 280,
  w: 40,
  h: 40,
  speed: 5,
  color: "purple",
};

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Loop
requestAnimationFrame(loop);
function loop() {
  // green boudaries
  if (p1.x < -40) {
    p1.x = 800;
  } else if (p1.x > 800) {
    p1.x = -40;
  }
  if (p1.y < -40) {
    p1.y = 600;
  } else if (p1.y > 600) {
    p1.y = -40;
  }

  // Logic
  if (leftPressed) {
    p1.x -= p1.speed;
    if (p1.y > 185 && p1.y < 375 && p1.x > 335 && p1.x < 425) {
      p1.x = 425;
    }
  } else if (rightPressed) {
    p1.x += p1.speed;
    if (p1.y > 185 && p1.y < 375 && p1.x > 335 && p1.x < 425) {
      p1.x = 335;
    }
  }
  if (upPressed) {
    p1.y -= p1.speed;
    if (p1.y > 185 && p1.y < 375 && p1.x > 335 && p1.x < 425) {
      p1.y = 375;
    }
  } else if (downPressed) {
    p1.y += p1.speed;
    if (p1.y > 185 && p1.y < 375 && p1.x > 335 && p1.x < 425) {
      p1.y = 185;
    }
  }

  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 600);
  // Square
  ctx.fillStyle = p1.color;
  ctx.fillRect(p1.x, p1.y, p1.w, p1.h);

  // Gray Rect
  ctx.fillStyle = "gray";
  ctx.fillRect(375, 225, 50, 150);

  // Gray Rect Border (looks cool)
  ctx.strokeStyle = "slate gray";
  ctx.strokeRect(375, 225, 50, 150);

  requestAnimationFrame(loop);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  console.log(e.code);
  if (e.code === "KeyA") {
    leftPressed = true;
  } else if (e.code === "KeyD") {
    rightPressed = true;
  } else if (e.code === "KeyW") {
    upPressed = true;
  } else if (e.code === "KeyS") {
    downPressed = true;
  }
}
document.addEventListener("keyup", keyupHandler);

function keyupHandler(e) {
  console.log(e.code);
  if (e.code === "KeyA") {
    leftPressed = false;
  } else if (e.code === "KeyD") {
    rightPressed = false;
  } else if (e.code === "KeyW") {
    upPressed = false;
  } else if (e.code === "KeyS") {
    downPressed = false;
  }
}
