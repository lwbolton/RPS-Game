function getUserHand(){
    document.querySelector(".container").style.display = 'none';

    let rock = document.getElementById("rockBtn");
    rock.style.filter = null;
    rock.addEventListener("click", getRock)

    let paper = document.getElementById("paperBtn");
    paper.style.filter = null;
    paper.addEventListener("click", getPaper)

    let scissors = document.getElementById("scissorsBtn");
    scissors.style.filter = null;
    scissors.addEventListener("click", getScissors)
}

//There has got to be a better way than drop-shadow
function getRock() {
    const userHand = 'Rock';
    console.log("userHand: testRock");
    document.getElementById('rockBtn').style.filter = "drop-shadow(0 0 0 #FE00B7)";
    endGame(userHand);
}

function getPaper() {
    const userHand = 'Paper';
    console.log("userHand: testPaper");
    document.getElementById('paperBtn').style.filter = "drop-shadow(0 0 0 #FE00B7)";
    endGame(userHand);
}

function getScissors() {
    const userHand = 'Scissors';
    console.log("userHand: Scissors");
    document.getElementById('scissorsBtn').style.filter = "drop-shadow(0 0 0 #FE00B7)";
    endGame(userHand);
}

const getGH = function() {
    let actions = ['Rock', 'Paper', 'Scissors'];
    return actions[Math.floor(Math.random() * actions.length)];
}

const getGHColor = function(genHand) {
    //const gameText = document.getElementsByClassName('game'); //test. Remove gameText at each if statement
    //for(let i in gameText) {
        if(genHand === 'Scissors') {
            document.getElementById('scissorsBtn').style.filter = "drop-shadow(0 0 0 #FFFF00)";
            //gameText[i].innerText="Test Scissors";
        } else if (genHand === 'Paper') {
            document.getElementById('paperBtn').style.filter = "drop-shadow(0 0 0 #FFFF00)";
            //gameText[i].innerText="Paper";
        } else if (genHand === 'Rock') {
            document.getElementById('rockBtn').style.filter = "drop-shadow(0 0 0 #FFFF00)";
            //gameText[i].innerText="Rock";
        }
    //}
}

//Work in progress
const outcome = function(x) {
    if(x){
        return answer = "You lose!"
    } else if(!x) {
        return answer = "You win!"
    }
}

function endGame(userHand){

    const genHand = getGH();
    const insertOutcome = outcome();
    console.log("GenHand: " + genHand)
    const gameText = document.getElementsByClassName('game');
    const winLossBool = false;

    for(let i in gameText){
        if (userHand === genHand) { //Same Hand
            gameText[i].innerText="Draw!"
        }
        else if (userHand === 'Rock') {//User is Rock
            if (genHand === 'Paper') {
                gameText[i].innerText="Paper Covers Rock. You lose!"
                getGHColor(genHand);
            }
            else if (genHand === 'Scissors') {
                //winLossBool = true;
                //outcome(winLossBool);
                gameText[i].innerText=`Rock Breaks Scissors. ${insertOutcome}` //Current test. Change const, will it even work?
                getGHColor(genHand);
            }
        }
        else if (userHand === 'Paper') {//User is Paper
            if (genHand === 'Scissors') {
                gameText[i].innerText="Scissors Cut Paper. You lose!"
                getGHColor(genHand);
            }
            else if (genHand === 'Rock') {
                gameText[i].innerText="Paper Covers Rock. You win!"
                getGHColor(genHand);
            }
        }
        else if (userHand === 'Scissors') {//User is Scissors
            if (genHand === 'Rock') {
                gameText[i].innerText="Rock breaks Scissors. You lose!"
                getGHColor(genHand);
            }
            else if (genHand === 'Paper') {
                gameText[i].innerText="Scissors Cut Paper. You win!"
                getGHColor(genHand);
            }
        }
    }
    playAgain();
}

function playAgain() {
    document.querySelector(".container").style.display = 'unset';
    document.querySelector(".container").getElementsByTagName('h1')[0].innerHTML = 'Play again?';
    //reset drop shadows manually, or other method?
    // document.getElementById('paperBtn');
    // document.getElementById('scissorsBtn');
    // document.getElementById('rockBtn');
}

/* List of things to still add: 

-Color for the generated hand. ++
-Play again button ++
-Get rid of alerts and insert below Rochambeau ++
-Color the text of the outcome "You win"
-Possibly add a score
//library "awesome"
*/