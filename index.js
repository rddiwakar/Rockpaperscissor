// global variables
let arr = ["rock","paper","scissors"];
let result = document.getElementById("result")
let rockImg = document.getElementById("rock")
let paperImg = document.getElementById("paper")
let scissorImg = document.getElementById("scissors")
let displayScore = document.getElementById("display")
let useradd = 0;
let computeradd = 0;

// event listner
rockImg.addEventListener("click", rock);
paperImg.addEventListener("click", paper);
scissorImg.addEventListener("click", scissor)

// function for event listner
function rock(event){
    setTimeout((event)=> rockImg.style.background = "lightgrey", 500)
    let random = arr[Math.floor(Math.random() * arr.length)];

    if("rock" === random) {
        result.innerHTML ="It was a draw! You both chose Rock";
        rockImg.style.background = "grey";

    } else if(random === "paper"){
        result.innerHTML = "Paper (comp) beats Rock (user). You lose! <audio autoplay src = 'Assets/sound2.mp3'></audio>";
        rockImg.style.background = "red";
        computeradd+= 1
    }else{
        result.innerHTML = "Rock (user) beats Scissor (comp). You win!<audio autoplay src = 'Assets/sound1.mp3'></audio> ";
        rockImg.style.background = "green";
        useradd += 1;
    }
    displayScore.innerHTML  = `${useradd}:${computeradd}`;
    if (computeradd == 10 ){
        displayScore.innerHTML  = `${useradd}:${computeradd}<br> You Lose, Try again...<audio autoplay src = "Assets/sound4.mp3"></audio>`
        useradd = 0;
        computeradd = 0
        
    }else if(useradd == 10){
        displayScore.innerHTML  = `${useradd}:${computeradd}<br> You born winner!<audio autoplay src="Assets/sound3.mp3"></audio>`

        useradd = 0;
        computeradd =0
        
    }
    event.preventDefault();
}

function paper(event){
    setTimeout((event)=> paperImg.style.background = "lightgrey", 500)
    let random = arr[Math.floor(Math.random() * arr.length)];

    if("paper" === random) {
        result.innerHTML ="It was a draw! You both chose Paper";
        paperImg.style.background = "grey"
    } else if(random === "scissors"){
        result.innerHTML = "Scissor (comp) beats Paper (user). You lose! <audio autoplay src = 'Assets/sound2.mp3'></audio>";
        paperImg.style.background = "red";
        computeradd += 1;
    }else{
        result.innerHTML = "Paper (user) beats Rock (comp). You win! <audio autoplay src = 'Assets/sound1.mp3'></audio>";
        paperImg.style.background = "green";
        useradd += 1;
    }
    displayScore.innerHTML  = `${useradd}:${computeradd}`
    if (computeradd == 10 ){
        displayScore.innerHTML  = `${useradd}:${computeradd}<br> Better luck next time!<audio autoplay src = "Assets/sound4.mp3"></audio>`
        useradd = 0;
        computeradd = 0
    }else if(useradd == 10){
        displayScore.innerHTML  = `${useradd}:${computeradd} <br>Congratulations on the big win! Enjoy your success<audio autoplay src="Assets/sound3.mp3"></audio>`
        useradd = 0;
        computeradd = 0
    }
    event.preventDefault();
}


function scissor(event){
    setTimeout((event)=> scissorImg.style.background = "lightgrey", 500)
    let random = arr[Math.floor(Math.random() * arr.length)];

    if("scissors" === random) {
        result.innerText ="It was a draw! You both chose Scissor";
        scissorImg.style.background = "grey";
    } else if(random === "rock"){
        result.innerHTML = "Rock (comp) beats Scissor (user). You lose! <audio autoplay src = 'Assets/sound2.mp3'></audio>";
        scissorImg.style.background = "red";
        computeradd += 1;
    }else{
        result.innerHTML = "Scissor (user) beats Paper (comp). You win!<audio autoplay src = 'Assets/sound1.mp3'></audio>";
        scissorImg.style.background = "green";
        useradd += 1;
    }
    displayScore.innerHTML  = `${useradd}:${computeradd}`;

    if (computeradd == 10 ){
        displayScore.innerHTML  = `${useradd}:${computeradd} <br>You Lose, try your luck next time<audio autoplay src = "Assets/sound4.mp3"></audio>`;
        useradd = 0;
        computeradd = 0
    }else if(useradd == 10){
        displayScore.innerHTML  = `${useradd}:${computeradd} <br> You are Champion<audio autoplay src="Assets/sound3.mp3"></audio>`
        useradd = 0;
        computeradd = 0;
    }
    event.preventDefault();
}
