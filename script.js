/* Function getRounds
 * pulls rounds from the input box on the home page and sends to setRounds
 * @param = none
 * @return = none
 */
function getRounds(){
    let rounds = document.getElementById("rounds").value;
    setRounds(rounds);
}

/* Function getRounds
 * Checks if rounds are odd. If even, warning message. 
 * Otherwise, sets round to 1, stores rounds and round in localStorage and loads chooser.html. 
 * @param = founds
 * @localStorage => round, rounds
 * @return = none
 */
function setRounds(rounds){
    if (rounds % 2 == 0 || isNaN(rounds)) {
        //alert("must be odd");
        document.getElementById("rounds").value = "odd numbers only"
    }
    else {
        let score = [0,0];
        localStorage.setItem("score",JSON.stringify(score));
        localStorage.setItem("rounds",rounds);
        localStorage.setItem("round",1);
        window.location.href = "chooser.html";
    }
}

/* Function showRound
 * Gets rounds and round from local storage and displays in chooser.html.
 * @param = none
 * @localStorage => round, rounds
 * @return = none
 */
function showRound(){
    let round = localStorage.getItem("round");
    let rounds = localStorage.getItem("rounds");
    let score = JSON.parse(localStorage.getItem("score"));
    if (round > rounds) { 
        window.location.href = "gameover.html";
    }
    let scoreBox= document.getElementById("scoreBox");
    scoreBox.innerHTML = score.toString();
    let statsBox = document.getElementById("statsBox");
    let message = "Round " + round + " of " + rounds;
    statsBox.innerHTML = message;
}

/* Function cpuTurn
 * Called by buttons in chooser with userturn u as argument.
 * Generates a computer turn c and sends u and c to findWinner
 * @param = u
 * @return = u,c
 */
function cpuTurn(u){
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    findWinner(u,c);
}

/* Function findWinner
 * Checks if u & c are equal.  If not, finds winner and updates showRound, 
 * Incrementing round and saving to local storage.
 * @param = u,c
 * @localStorage <=> round++
 * @return = none
 */
function findWinner(u,c){
    if (u == c){
        document.getElementById("result").innerHTML = "We both picked " + u;  
        //alert("We both picked " + u);
    }
    else {
        let winner = localStorage.getItem("winner");
        let winArray=[["r","p","I"],["r","s","You"],["p","s","I"],["p","r","You"],["s","r","I"],["s","p","You"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner = winArray[i][2];
            }   
        }
        document.getElementById("result").innerHTML = "You choose " + u + " and I choose " + c + " " + winner + " win!";
        let players = ["You" , "I"];
        let win = players.indexOf(winner);
        let score = JSON.parse(localStorage.getItem("score"));
        score[win]++;
        let rounds = localStorage.getItem("rounds");
        if ( score[win] > rounds/2){
            window.location.href = "gameover.html";
        }
        document.getElementById("scoreBox").innerHTML = "Score : " + score.toString;
        let round = localStorage.getItem("round");
        round++;
        localStorage.setItem("round",round);
        localStorage.setItem("score",JSON.stringify(score));
        showRound();
    }
}
function endGame(){
    let winner = "I";
    let score = JSON.parse(localStorage.getItem("score"));
    if (score[0] > score[1]){
       winner = "You";
    }
    let message = winner + " won ";
    if (score[0] > score[1]){
        localStorage.setItem("winner", " You");
    }
    else
    message += score.join(" to ");
    document.getElementById("scoreBox").innerHTML = message;
}
function playAgain(){
    window.location.href = "index.html";
}