var scores, roundScores, activePlayer, gamePlaying,lastDice;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    if( dice === 6 && lastDice === 6 && lastDice) {
    // Player looses score
    roundScores += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;
    nextPlayer();
    }
    else if (dice !== 1) {
    //Add score
    roundScores += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        nextPlayer();
      }
      lastDice = dice;
    } 
});

    document.querySelector('.btn-hold').addEventListener('click', function() {
        if(gamePlaying){
        // Add current score to global score
        scores[activePlayer] += roundScores;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore;
        var existScore = 0;    
        if (input){
            winningScore = input;
            existScore = 1;
        } else {
            winningScore = 100;
        }

        // Check if player won the game
        if ( existScore == 1){
            if(scores[activePlayer] >= input) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            }
            else {
                nextPlayer();
                }
        }
        else{
            if(scores[activePlayer] >= 100) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
                nextPlayer();
                }
        }
        
    }
    });

    function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }

    document.querySelector('.btn-new').addEventListener('click', init);

    function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScores = 0;
        gamePlaying = true;
        document.querySelector('.dice',).style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
















