import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space.png";

const playerBulletController = new BulletController(canvas, 10, "red", true);
const enemyBulletController = new BulletController(canvas, 4, "white", false);
const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;

function game() {
  checkGameOver();
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  displayGameOver();
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  }
}

let restartButtonCreated = false;

function displayGameOver() {
  if (isGameOver) {
    let text = didWin ? "You Win" : "Game Over";
    let textOffset = didWin ? 3.5 : 5;

    ctx.fillStyle = "white";
    ctx.font = "70px Arial";
    ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);

    if (!restartButtonCreated) {
      const restartButton = document.createElement("button");
      restartButton.innerText = "Restart?";
      restartButton.style.fontFamily = "Press Start 2P";
      restartButton.addEventListener("click", restartGame);
      restartButton.classList.add("restart-button");
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      restartButton.style.position = "absolute";
      restartButton.style.left = centerX - 50 + "px";
      restartButton.style.top = centerY + 50 + "px";

      canvas.parentNode.appendChild(restartButton);

      restartButtonCreated = true;
    }
  }
}

function restartGame() {
  window.location.reload();
}

function checkGameOver() {
  if (isGameOver) {
    return;
  }

  if (enemyBulletController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.collideWith(player)) {
    isGameOver = true;
  }

  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
}

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

let timerId = null;

function startGame() {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(game, 1000 / 60);
}
