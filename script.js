function checkConnection() {
    // Get user input
    const userInput = document.getElementById('userInput').value;

    // Check sum of digits
    const sumOfDigits = calculateSumOfDigits(userInput);
    if (sumOfDigits === 7) {
        displayOutput('Thala for a Reason! Sum of digits is 7!');
        playLocalVideo('localVideoSeven');
        return;
    }

    // Check number of letters
    const numberOfLetters = countLetters(userInput);
    if (numberOfLetters === 7) {
        displayOutput('Thala for a Reason! 7 letters found!');
        playLocalVideo('localVideoSeven');
        return;
    }

    // Check number of words
    const numberOfWords = countWords(userInput);
    if (numberOfWords === 7) {
        displayOutput('Thala for a Reason! 7 words found!');
        playLocalVideo('localVideoSeven');
        return;
    }

    // Check numerology
    const numerologyResult = numerologyConnection(userInput);
    if (numerologyResult) {
        displayOutput(numerologyResult);
        playLocalVideo('localVideoSeven');
        return;
    }

    // Check wordplay
    if (wordplayConnection(userInput)) {
        displayOutput('Thala for a Reason! Wordplay connection to 7!');
        playLocalVideo('localVideoSeven');
        return;
    }

    // No connection found, play another video
    displayOutput('No connection to 7 found. Moye Moye!');
    playLocalVideo('localVideoOther');
}

function playLocalVideo(videoId) {
    // Hide all video elements
    document.getElementById('localVideoSeven').style.display = 'none';
    document.getElementById('localVideoOther').style.display = 'none';

    // Show the specified video element
    document.getElementById(videoId).style.display = 'block';

    // Play the video
    document.getElementById(videoId).play();
}


function calculateSumOfDigits(input) {
    return input
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + digit, 0);
}

function countLetters(input) {
    return input.replace(/[^a-zA-Z]/g, '').length;
}

function countWords(input) {
    return input.split(/\s+/).filter(word => word.length > 0).length;
}

function numerologyConnection(input) {
    // Calculate numerology value by summing the numeric values of each character
    const charValues = input
        .toLowerCase()
        .split('')
        .map(char => char.charCodeAt(0) - 96); // convert 'a' to 1, 'b' to 2, ..., 'z' to 26

    const numerologyValue = charValues.reduce((sum, value) => sum + value, 0);

    // Check if the total numerology value or any part of it equals 7
    if (numerologyValue === 7) {
        return `Thala for a Reason! Numerology connection to 7: Sum of all characters is 7 (${charValues.join(' + ')} = ${numerologyValue})`;
    }

    // Check if any part of the numerology value equals 7
    const numerologyParts = numerologyValue.toString().split('');
    if (numerologyParts.includes('7')) {
        const contributingChars = charValues.filter(value => numerologyParts.includes(value.toString()));
        return `Thala for a Reason! Numerology connection to 7: The sum of ${contributingChars.join(' + ')} equals 7! (${charValues.join(' + ')} = ${numerologyValue})`;
    }

    // No numerology connection found
    return false;
}


function wordplayConnection(input) {
    // Check if the input contains words that sound like 'seven'
    const soundingWordsRegex = /\b(seven|sevin|sevn|sevun|sevin|thala|dhoni|captain|csk|sath|mahi|mahendra|ms|helicopter|koyal|msd|chennai|7|saath|ranchi|legend|jharkhand)\b/i;
    return soundingWordsRegex.test(input);
}


function displayOutput(message) {
    document.getElementById('output').innerText = message;
}
