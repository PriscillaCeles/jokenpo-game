// alert('')

const $stoneButton1 = document.querySelector ('.button-stone-player-1')
const $paperButton1 = document.querySelector ('.button-paper-player-1')
const $scissorsButton1 = document.querySelector ('.button-scissors-player-1')

const $stoneButton2 = document.querySelector ('.button-stone-player-2')
const $paperButton2 = document.querySelector ('.button-paper-player-2')
const $scissorsButton2 = document.querySelector ('.button-scissors-player-2')

const $restartsButton = document.querySelector ('.button-reset')
const $startsButton = document.querySelector ('.button-start')

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
let gameStart = false


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
    } else if (gameResult == 2) {
        $winnerTitle.innerHTML = 'Jogadora 2 ganhou!'
    } else {
        $winnerTitle.innerHTML = 'Resultado'
    }
}

function printScore () {
    if (score1 <10) {
        $scorePlayer1.innerHTML = '0' + score1
    } else {
        $scorePlayer1.innerHTML = score1
    }
    if (score2 <10) {
        $scorePlayer2.innerHTML = '0' + score2
    } else {
        $scorePlayer2.innerHTML = score2
    }
}

function addPoint(winnerPoint) {
    if (winnerPoint == 1) {
        score1 += 1
    }
    if (winnerPoint == 2) {
        score2 += 1
    }

}

function resetBattlesField () {
    $fieldPlayer1.innerHTML = '';
    $fieldPlayer2.innerHTML = '';
}

function resetScoreBoard(){
    $scorePlayer1.innerHTML = '00'
    $scorePlayer2.innerHTML = '00'
}

function resetMoveVariables () {
    movePlayer1 = ''
    movePlayer2 = ''
}

function resetScoreVariables(){
    score1 = 0
    score2 = 0
}

function resetButtonStart () {
    $startsButton.innerHTML = 'Iniciar'
    $startsButton.classList.remove('start')
    gameStart = false
}


function move(moveName, field) {
    if (gameStart) {
        if (field == 1){
            $fieldPlayer1.innerHTML = '<img class="move-image" src="./img/' + moveName + '.png"/>'
            movePlayer1 = moveName
        } else if (field == 2) {
            $fieldPlayer2.innerHTML = '<img class="move-image" src="./img/' + moveName + '.png"/>'
            movePlayer2 = moveName
        }
        verifyGame()
        printGameResult()
        if (gameResult != null){
            setTimeout (resetBattlesField, 1500)
            resetMoveVariables ()
            addPoint (gameResult)
            printScore ()
            gameResult = null
        }
    }
}

$stoneButton1.addEventListener('click', function (){
    move('stone', 1)
})

$paperButton1.addEventListener('click', function (){
    move ('paper', 1)
})

$scissorsButton1.addEventListener('click',function (){
    move('scissors', 1)
}) 

$stoneButton2.addEventListener('click', function (){
    move('stone', 2)
})
$paperButton2.addEventListener('click', function (){
    move('paper', 2)
})
$scissorsButton2.addEventListener('click',function (){
    move('scissors', 2)
})

$restartsButton.addEventListener('click',function (){
    resetBattlesField()
    resetMoveVariables ()
    resetScoreBoard ()
    resetScoreVariables()
    gameResult = null
    $winnerTitle.innerHTML = "Resultado"
    resetButtonStart ()
    // location.reload()
})

$startsButton.addEventListener('click', function() {
    gameStart = !gameStart
    $startsButton.classList.toggle('start')
    if (gameStart) {
        $startsButton.innerHTML = 'Pausar'
    } else {
        $startsButton.innerHTML = 'Iniciar'
    }
    
})

