### To Do

1. **done**Preview this MarkDown file with Control+Shift+V
1. **done** Set the value of document element with id = rounds to "odd numbers only" if an even number is entered, and do not display this message as an alert.
1. **done**In script, replace if (rounds % 2 == 0) with if (rounds % 2 == 0 || isNaN(rounds)) so that people can't click past that error (isNan = "is not a number")
1. **done**Create a div in chooser.html with id = result and write "Choose a move" inside it. 
1. **done** Display the findWinner message inside that div, replacing "Choose a Move" when there is a winner, instead of displaying that message as an alert. 
1. **done** Replace that result message with the "We both picked" alert message if u and c are the same, and do not display the alert. 
1. **done** To the body element, apply the css rule position:relative;
1.  **done**On chooser.html, create a div with id = scoreBox above statsBox and containing the HTML "Score: loading"
1. **done** Apply these css rules to a #scoreBox selector:  position:absolute; right:10px; top: 10px; border:1px solid black; background:white;padding:10px;
1. **done** In setRounds, if rounds was odd, create an array called score and set it to [0,0]. 
1.  **done** Next, store the score array to local storage using JSONstringify.
1.  **done** In showRound, get score from local storage, JSON parsed.
1.  **done** Next, replace "Score: loading" in scoreBox with score.toString()
1.  **done** In findWinner, store the winner in local storage as winner.
1. **done** After you set the round, get the score array from local storage, JSON parsed. 
1. **done** Next, create a players array with the two players, "You" first. 
1. **done** Next, set win equal to the index of the winner in players.
1. **done**  Next, increase by one the value of the element in the score array with index win**
1. **done** Next, display the updated score in the scoreBox div with "Score : " + score.toString;
1. **done** Next, store the score array, stringified, in local storage.
1. **done** Now, in gameover.html, add the scorebox div above the play again button
1. **done** Give scoreBox the class "over" 
1. **done** Style over with font 24pt, margin auto, position static (important), width 10 em, text align center.
1. **done** Get the winner variable from local storage
1. **done** Create a variable called message, and begin it winner + won, 
1. **done** Add the score to message, but join the values with " to " instead of a comma. 
1. **done** Display the message in scoreBox. 
1. **done** If this is working, save the branch now. 
1. **done** Create a new branch called rps web refactored. 
1. **done** Go over all the code.  If you see any repeated lines, make new a function for those if possible.  
1. **done** If one player earns more than half the rounds, end the game.
1.**done When you are sure it works, pull request this branch to main, then merge it.  Then you can style to match your wireframes. Í
