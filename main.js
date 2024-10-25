$btnPedra = document.getElementById("btnPedra");
$btnPapel = document.getElementById("btnPapel");
$btnTesoura = document.getElementById("btnTesoura");

const options = ["pedra", "papel", "tesoura"];

const corVitoria = "#77dd77";
const corDerrota = "#ff6961";
const corEmpate = "#fdfd96";


const $resultado = document.getElementById("resultado")

const $audioWin = document.getElementById("audioWin");
const $audioLose = document.getElementById("audioLose");
const $audioDraw = document.getElementById("audioDraw");
const $audioWait = document.getElementById("audioWait");

$btnPedra.addEventListener("click", () => play("pedra"));

$btnPapel.addEventListener("click", () => play("papel"));

$btnTesoura.addEventListener("click", () => play("tesoura"));

const $imgHandPlayer = document.getElementById("imgHandPlayer");

const $imgHandPc = document.getElementById("imgHandPc");

const $playerHandContainer = document.getElementById("playerHandContainer");

const $pcHandContainer = document.getElementById("pcHandContainer");

function play(choice) {
  resetHands();

  const random = options[Math.floor(Math.random() * options.length)];

  $imgHandPlayer.classList.add("shakePlayer");
  $imgHandPc.classList.add("shakePc");

  $audioWait.play();

  setTimeout(() => {
    
      $resultado.style.display = "block"
    if (choice === "pedra" && random === "tesoura") {
      $playerHandContainer.style.backgroundColor = corVitoria;
      $audioWin.play();
      $resultado.innerText = "Vitória";
      $pcHandContainer.style.backgroundColor = corDerrota;
    }
    if (choice === "pedra" && random === "papel") {
      $playerHandContainer.style.backgroundColor = corDerrota;
      $audioLose.play();
      $resultado.innerText = "Derrota";
      $pcHandContainer.style.backgroundColor = corVitoria;
    }

    if (choice === "papel" && random === "pedra") {
      $playerHandContainer.style.backgroundColor = corVitoria;
      $audioWin.play();
      $resultado.innerText = "Vitória";
      $pcHandContainer.style.backgroundColor = corDerrota;
    }
    if (choice === "papel" && random === "tesoura") {
      $playerHandContainer.style.backgroundColor = corDerrota;
      $audioLose.play();
      $resultado.innerText = "Derrota";
      $pcHandContainer.style.backgroundColor = corVitoria;
    }

    if (choice === "tesoura" && random === "papel") {
      $playerHandContainer.style.backgroundColor = corVitoria;
      $audioWin.play();
      $resultado.innerText = "Vitória";
      $pcHandContainer.style.backgroundColor = corDerrota;
    }
    if (choice === "tesoura" && random === "pedra") {
      $playerHandContainer.style.backgroundColor = corDerrota;
      $audioLose.play();
      $resultado.innerText = "Derrota";
      $pcHandContainer.style.backgroundColor = corVitoria;
    }

    if (choice === random) {
      $playerHandContainer.style.backgroundColor = corEmpate;
      $audioDraw.play();
      $resultado.innerText = "Empate";
      $pcHandContainer.style.backgroundColor = corEmpate;
    }

    $imgHandPlayer.classList.remove("shakePlayer");
    $imgHandPc.classList.remove("shakePc");

    $imgHandPlayer.setAttribute("src", `${choice}.png`);
    $imgHandPc.setAttribute("src", `${random}.png`);
  }, 1200);
}

function resetHands() {
    $resultado.style.display = "none";
  $audioWin.currentTime = 0;
  $audioWin.pause();
  $audioLose.currentTime = 0;
  $audioLose.pause();
  $audioDraw.currentTime = 0;
  $audioDraw.pause();
  $audioWait.currentTime = 0;
  $audioWait.pause();
  $imgHandPc.setAttribute("src", "pedra.png");
  $imgHandPlayer.setAttribute("src", "pedra.png");
  $playerHandContainer.style.backgroundColor = "gray";
  $pcHandContainer.style.backgroundColor = "gray";
}
