'use strict';
/*document.querySelector('.message').textContent = 'Correct number !!'; //stavi vrijednost koju smo napisali umisto neke koja je bila prije

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value);*/

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function(){
    //console.log(document.querySelector('.guess').value); //event handler
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent = "No number 😡";
    } else if (guess === number){
        document.querySelector('.message').textContent = "Correct  🥳";

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== number){
        if(score > 1){
            document.querySelector('.message').textContent = guess > number ? "Number is too HIGH" :  "Number is too LOW";
            score--;
            document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
        }
        else{
            document.querySelector('.message').textContent = "GAME OVER 😢";
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
