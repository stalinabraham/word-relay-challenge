let category = 'Animals'; // You can change the category or make it dynamic
let lastWord = '';
let usedWords = [];
let timeLeft = 30;
let timer;

function startGame() {
    lastWord = '';
    usedWords = [];
    document.getElementById('last-word').innerText = 'None';
    document.getElementById('message').innerText = '';
    document.getElementById('scores').innerHTML = '';
    timeLeft = 30;
    document.getElementById('time-left').innerText = timeLeft;
    document.getElementById('category').innerText = category;
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    document.getElementById('message').innerText = 'Time\'s up! Game over.';
    document.getElementById('word-input').disabled = true;
}

function submitWord() {
    let wordInput = document.getElementById('word-input');
    let word = wordInput.value.trim().toLowerCase();

    if (word === '') {
        return;
    }

    if (usedWords.includes(word)) {
        document.getElementById('message').innerText = 'This word has already been used!';
        return;
    }

    if (lastWord !== '' && word[0] !== lastWord.slice(-1)) {
        document.getElementById('message').innerText = `Word must start with "${lastWord.slice(-1)}"!`;
        return;
    }

    usedWords.push(word);
    lastWord = word;
    document.getElementById('last-word').innerText = word;
    document.getElementById('message').innerText = '';
    document.getElementById('scores').innerHTML += `<li>${word}</li>`;
    wordInput.value = '';
    timeLeft = 30; // Reset the timer for the next player
    document.getElementById('time-left').innerText = timeLeft;
}
