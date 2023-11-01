//top trending//
let arrowBtn = document.getElementsByClassName("arrow-game");
let arrowBtn2 = document.getElementsByClassName("arrow-game-right");
let trending = document.getElementsByClassName("games__game");
let modus2 = "one-two-three";

for (let i = 0; i < arrowBtn.length && i < arrowBtn2.length; i++) {
  arrowBtn[i].onclick = function () {
    if (modus2 == "one-two-three") {
      trending[1].style.display = "none";
      trending[0].style.display = "none";
      trending[2].style.display = "none";
      trending[3].style.display = "block";
      trending[4].style.display = "block";
      trending[5].style.display = "block";
      modus2 = "four-five-six";
    } else {
      trending[0].style.display = "block";
      trending[1].style.display = "block";
      trending[2].style.display = "block";
      trending[3].style.display = "none";
      trending[4].style.display = "none";
      trending[5].style.display = "none";
      modus2 = "one-two-three";
    }
  };

  arrowBtn2[i].onclick = function () {
    if (modus2 == "one-two-three") {
      trending[1].style.display = "none";
      trending[0].style.display = "none";
      trending[2].style.display = "none";
      trending[3].style.display = "block";
      trending[4].style.display = "block";
      trending[5].style.display = "block";
      modus2 = "four-five-six";
    } else {
      trending[0].style.display = "block";
      trending[1].style.display = "block";
      trending[2].style.display = "block";
      trending[3].style.display = "none";
      trending[4].style.display = "none";
      trending[5].style.display = "none";
      modus2 = "one-two-three";
    }
  };
}