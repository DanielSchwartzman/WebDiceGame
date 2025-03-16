
function throwDice(){
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    var p1 = document.querySelector("#p1");
    var p2 = document.querySelector("#p2");

    p1.src = `./images/dice${randomNum1}.png`;
    p2.src = `./images/dice${randomNum2}.png`;

    var h1 = document.querySelector(".header");
    if(randomNum1 > randomNum2){
        h1.textContent = "Player 1 wins!";
    }
    else if(randomNum2 > randomNum1){
        h1.textContent = "Player 2 wins!";
    }
    else{
        h1.textContent = "Draw";
    }
}