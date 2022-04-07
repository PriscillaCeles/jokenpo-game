// alert()

const $stoneButton1 = document.querySelector ('.button-stone-player-1')
const $paperButton1 = document.querySelector ('.button-paper-player-1')
const $scissorsButton1 = document.querySelector ('.button-scissors-player-1')

const $stoneButton2 = document.querySelector ('.button-stone-player-2')
const $paperButton2 = document.querySelector ('.button-paper-player-2')
const $scissorsButton2 = document.querySelector ('.button-scissors-player-2')

const $restartsButton = document.querySelector ('.button-reset')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

const $scorePlayer1 = document.querySelector('.scoreboard-score-1')
const $scorePlayer2 = document.querySelector('.scoreboard-score-2')

const $winnerTitle = document.querySelector('.winner-title')

let score1 = 0
let score2 = 0

let movePlayer1 = ''
let movePlayer2 = ''
let gameResult = null


function verifyGame() {
    if ((movePlayer1 == 'stone' && movePlayer2 == 'scissors') || (movePlayer1 == 'scissors' && movePlayer2 == 'paper') || (movePlayer1 == 'paper' && movePlayer2 == 'stone')) {
        gameResult = 1
    } else if ((movePlayer1 == 'stone' && movePlayer2 == 'paper') || (movePlayer1 == 'paper' && movePlayer2 == 'scissors') || (movePlayer1 == 'scissors' && movePlayer2 == 'stone')) {
        gameResult = 2
    } else if (movePlayer1 == movePlayer2){
        gameResult = 0
    }
}

function printGameResult() {
    if (gameResult == 0) {
        $winnerTitle.innerHTML = 'Empatou!'
    } else if (gameResult == 1){
        $winnerTitle.innerHTML = 'Jogadora 1 ganhou!'
        score1 = score1 + 1
        if (score1 <10){
            $scorePlayer1.innerHTML = "0" + score1
        }else {
            $scorePlayer1.innerHTML = score1
        }
    } else if (gameResult == 2) {
        $winnerTitle.innerHTML = 'Jogadora 2 ganhou!'
        score2 = score2 + 1
        if (score2 <10){
            $scorePlayer2.innerHTML = "0" + score2 
        }else {
            $scorePlayer2.innerHTML = score2
        }
    } else {
        $winnerTitle.innerHTML = 'Resultado'
    }
}

$stoneButton1.addEventListener('click', function (){
    $fieldPlayer1.innerHTML = '<img class="move-image" alt="pedra" src="./stone.png" />'
    movePlayer1 ='stone'
    verifyGame()
    printGameResult()
})
$paperButton1.addEventListener('click', function (){
    $fieldPlayer1.innerHTML = '<img class="move-image" alt="Papel" src="paper.png"/>'
    movePlayer1 ='paper'
    verifyGame()
    printGameResult()
})
$scissorsButton1.addEventListener('click',function (){
    $fieldPlayer1.innerHTML = '<img class="move-image" alt="Tesoura" src="scissors.png"/>'
    movePlayer1 ='scissors'
    verifyGame()
    printGameResult()
})

$stoneButton2.addEventListener('click', function (){
    $fieldPlayer2.innerHTML = '<img class="move-image" alt="pedra" src="./stone.png" />'
    movePlayer2 ='stone'
    verifyGame()
    printGameResult()
})
$paperButton2.addEventListener('click', function (){
    $fieldPlayer2.innerHTML = '<img class="move-image" alt="Papel" src="paper.png"/>'
    movePlayer2 ='paper'
    verifyGame()
    printGameResult()
})
$scissorsButton2.addEventListener('click',function (){
    $fieldPlayer2.innerHTML = '<img class="move-image" alt="Tesoura" src="scissors.png"/>'
    movePlayer2 ='scissors'
    verifyGame()
    printGameResult()
})



$restartsButton.addEventListener('click',function (){
    $winnerTitle.innerHTML = "Resultado"
    $fieldPlayer1.innerHTML = '';
    $fieldPlayer2.innerHTML = '';
    $scorePlayer1.innerHTML = '00'
    $scorePlayer2.innerHTML = '00'

    // location.reload()
})

