// Variables

let homeScore = 0;
let guestScore = 0;
let home = document.getElementById("home");
let guest = document.getElementById("guest");

// Home Functions
function homeOne() {
    homeScore += 1
    home.textContent = homeScore
}
function homeTwo() {
    homeScore += 2
    home.textContent = homeScore
}

function homeThree() {
    homeScore += 3
    home.textContent = homeScore
}


// Guest Functions
function guestOne() {
    guestScore += 1
    guest.textContent = guestScore
}
function guestTwo() {
    guestScore += 2
    guest.textContent = guestScore
}

function guestThree() {
    guestScore += 3
    guest.textContent = guestScore
}


// Rest Game Scores
function resetScores() {
    homeScore = 0;
    home.textContent = homeScore
    guestScore = 0;
    guest.textContent = guestScore
    
}
