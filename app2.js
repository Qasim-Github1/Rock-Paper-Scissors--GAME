let choices = document.querySelectorAll(".choice");
let userWin = true;
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let results = document.querySelector("#results")
let resetButton = document.querySelector("#btn");
let uS = 0;
let cS = 0;
let totalGames = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
      
        let choiceID = choice.getAttribute("id");
       // console.log(choiceID)
       totalGames++;
        playGame(choiceID, totalGames);
    });
});

function compTurn () {
    let arrayChoices = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random()*3);
    return(arrayChoices[num]);
}
function gameDraw(user, comp){
    console.log("Draw!!!!");
    results.innerHTML = `Match is <span class="one"> Draw  </span> You selected <span class="one"> ${user} </span> and computer selected <span class="two"> ${comp} </span>`;
}

resetButton.addEventListener("click", () => {
            uS = 0;
            userScore.innerHTML = uS;
            cS = 0;
            compScore.innerHTML=cS;
            results.innerHTML="";
          
})

function showWinner(user,comp,userChoice){
    if(user){
        results.innerHTML = `<span class="one"> You Win!! </span> You selected <span class="one"> ${userChoice} </span> and computer selected <span class="two"> ${comp} </span>`;
        uS++;
        userScore.innerHTML = uS;

    }
    else {
        results.innerHTML = `<span class="two"> You lose!!  </span> You selected <span class="two"> ${userChoice} </span> and computer selected  <span class="one"> ${comp} </span> `;
        cS++;
        compScore.innerHTML=cS;
    }
}



function playGame(userChoice){
console.log("User choice is " + userChoice);
let compChoice = compTurn();
let userWin = true;
console.log(`Comp choice is ${compChoice}`);
if(userChoice === compChoice)
    {
        gameDraw(userChoice , compChoice);
    }
   else{ if (userChoice === "Rock")
        {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Scissors")
            {
                userWin = compChoice === "Paper" ? true : false;
            }
            else if (userChoice === "Paper")
                {
                    userWin = compChoice === "Rock" ? true : false;
                }
                showWinner(userWin, compChoice, userChoice);

            }
}