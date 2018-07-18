var numSquares = 6;
var colourList = []; //array of 6 random colours
var correctColour;

var colourSquares = document.querySelectorAll(".colour-square");
var displayedColour = document.getElementById("game-colour");
var guessResult =  document.querySelector("#guess-result");
var header = document.querySelector("h1");
var restartBtn = document.querySelector("#restart");

var modeBtns = document.querySelectorAll(".mode");
init();

function init() {
  // mode buttons
  setModeBtns();
  setSquares();
  reset();
}

function setModeBtns() {
  for (var i = 0; i < modeBtns.length; ++i) {
    modeBtns[i].addEventListener("click", function () {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

      reset();
    });
  }
}

function setSquares() {
  for (var square = 0; square < colourSquares.length; ++square) {
    reset();
    // click listeners for squares
    colourSquares[square].addEventListener("click", function() {
      var colourClicked = this.style.backgroundColor;
      console.log(colourClicked, correctColour);
      if (colourClicked === correctColour) {
        guessResult.textContent = "Correct!";
        changeColours(colourClicked);
        header.style.backgroundColor = correctColour;
        restartBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        guessResult.textContent = "Try Again!";
      }
  });
  }
}

function reset() {
  colourList = makeColours(numSquares);
  correctColour = colourList[Math.floor(Math.random() * colourList.length)];
  restartBtn.textContent = "New Colours";
  displayedColour.textContent = correctColour;
  guessResult.textContent = "";

  for (var square = 0; square < colourSquares.length; ++square) {
    if (colourList[square]) {
      colourSquares[square].style.display = "block";
      colourSquares[square].style.backgroundColor = colourList[square];
    } else {
      colourSquares[square].style.display = "none";
    }
  }
  header.style.background = "steelblue";
}

restartBtn.addEventListener("click", function() {
  reset();
});

function changeColours(c) {
  // change all squares to be the colour c
  for (var square = 0; square < colourSquares.length; ++square) {
    colourSquares[square].style.backgroundColor = c;
  }
}

function makeColours(numColours) {
  var colours = [];

  for (var i = 0; i < numColours; ++i) {
    colours.push(randomColour());
  }

  return colours;
}

function randomColour() {
  // pick an r,g,b from [0, 255]
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + ", " + green + ", " + blue +")";
  return rgb;
}
