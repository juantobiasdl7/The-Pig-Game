/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//Defining variables

var scores, roundScores, activePlayer, gamePlaying, twelvePresent = 0, validation = 0;

function timeFunction() {
            setTimeout(nextPlayer, 3000);
         }


init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        var diceDOMTwo = document.querySelector('.dice-two');
        diceDOMTwo.style.display = 'block';
        diceDOMTwo.src = 'dice-' + diceTwo + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1 & diceTwo !== 1){
            //Check to see the sum 6 + 6
            twelvePresent = dice + diceTwo;
            if (twelvePresent == 12){
                     
                   roundScore = 0;
                   twelPresent = 0; 
                    scores[activePlayer] = 0;
                    
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                    document.querySelector('#current-' + activePlayer).textContent = "U lose it all.";
                    
                    timeFunction();
                
                } else {
                   
                    roundScore += dice + diceTwo;
                     document.querySelector('#current-' + activePlayer).textContent = roundScore;   
                }
                
        }else{
            nextPlayer();
        } 

});


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    var x = document.getElementById("shit").value;
    
    
    if(gamePlaying){
        //add current score to global score
        scores[activePlayer] += roundScore;
        sixPresent = 0;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if (scores[activePlayer] >= x){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        }else{
           //Next player
            nextPlayer(); 
        }
    } 
});


function nextPlayer(){
    //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        /*document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');*/
        
        //document.querySelector('.dice').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
   // document.querySelector(".dice").style.display = "none";

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}










/*document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';

Just to read the value of an HTML element
var x = document.querySelector("#score-0").textContent;
console.log(x);*/


