
function playGame() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var images1 = "images/dice" + randomNumber1 + ".png";
    var images2 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".dice .img1").setAttribute("src", images1);
    document.querySelector(".dice .img2").setAttribute("src", images2);

    var title = document.querySelector("h1");

    if (randomNumber1 === randomNumber2) {
        title.innerHTML = ("Draw")
    } else if (randomNumber1 > randomNumber2) {
        title.innerHTML = ("play 1 wins!")
    } else if (randomNumber1 < randomNumber2) {
        title.innerHTML = ("play 2 wins!")
    }
}

var btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    playGame();
});