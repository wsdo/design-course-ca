// ===========================================================================================
// ===========================================================================================
// =========================== Modal & trun to another page ==================================
//.js for model before turning to another page
var modal = document.getElementById("myLivestreamListModal");
var livestreamFrameBlock1 = document.getElementById("livestream_frame_block_1");
var livestreamFrameBlock2 = document.getElementById("livestream_frame_block_2");
var livestreamFrameBlock3 = document.getElementById("livestream_frame_block_3");
var livestreamFrameBlock4 = document.getElementById("livestream_frame_block_4");
var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");

var clickedFrameBlock = "";

// When Livestream Frame Block 1 is clicked, show the modal
livestreamFrameBlock1.addEventListener("click", function () {
    modal.style.display = "block";
    clickedFrameBlock = "livestream_frame_block_1";
});

// When Livestream Frame Block 2 is clicked, show the modal
livestreamFrameBlock2.addEventListener("click", function () {
    modal.style.display = "block";
    clickedFrameBlock = "livestream_frame_block_2";
});

// When Livestream Frame Block 3 is clicked, show the modal
livestreamFrameBlock3.addEventListener("click", function () {
    modal.style.display = "block";
    clickedFrameBlock = "livestream_frame_block_3";
});

// When Livestream Frame Block 4 is clicked, show the modal
livestreamFrameBlock4.addEventListener("click", function () {
    modal.style.display = "block";
    clickedFrameBlock = "livestream_frame_block_4";
});

// When Yes button is clicked, navigate to specific section based on clicked frame block
yesButton.addEventListener("click", function () {
    // Determine the target section on page 2
    var targetSection = "";
    if (clickedFrameBlock === "livestream_frame_block_1") {
        targetSection = "livestreamDetails-live-1";
    } else if (clickedFrameBlock === "livestream_frame_block_2") {
        targetSection = "livestreamDetails-live-2";
    } else if (clickedFrameBlock === "livestream_frame_block_3") {
        targetSection = "livestreamDetails-live-3";
    } else if (clickedFrameBlock === "livestream_frame_block_4") {
        targetSection = "livestreamDetails-live-4";
    }

    // Navigate to LivestreamDetails.html with fragment identifier
    window.location.href = `../pages/livestream-details.html#${targetSection}`;
});

// When No button is clicked, close the modal
noButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// ===========================================================================================
// ===========================================================================================
// ======================== scroll down for minigame =========================================

function scrollToMinigame() {
    var minigameSection = document.getElementById('livestream-minigame');

    if (minigameSection) {
        minigameSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===========================================================================================
// =================================== Minigame ==============================================

const symbols = ['🌟', '🍎', '🚀', '🎈', '🌈', '🍕', '🎉', '🐱'];

let shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
let selectedCards = [];
let matchedPairs = 0;

function createCard(symbol, index) {
    const card = document.createElement('div');
    card.classList.add('livestream-minigame-card');
    card.textContent = symbol;
    card.setAttribute('data-index', index);
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (selectedCards.length === 2) {
        return;
    }

    const clickedCard = this;
    clickedCard.classList.add('flipped');
    selectedCards.push(clickedCard);

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [firstCard, secondCard] = selectedCards;
    const index1 = firstCard.getAttribute('data-index');
    const index2 = secondCard.getAttribute('data-index');

    if (index1 === index2) {
        selectedCards.forEach(card => card.classList.remove('flipped'));
    } else if (firstCard.textContent === secondCard.textContent) {
        selectedCards.forEach(card => card.classList.add('matched'));
        matchedPairs++;

        if (matchedPairs === symbols.length) {
            alert('Congratulations! You matched all pairs!');
            resetGame();
        }
    } else {
        selectedCards.forEach(card => card.classList.remove('flipped'));
    }

    selectedCards = [];
}

function resetGame() {
    const gameContainer = document.getElementById('livestream-minigame-container');
    gameContainer.innerHTML = '';
    shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    selectedCards = [];
    matchedPairs = 0;
    createGameBoard();
}

function createGameBoard() {
    const gameContainer = document.getElementById('livestream-minigame-container');

    shuffledSymbols.forEach((symbol, index) => {
        const card = createCard(symbol, index);
        gameContainer.appendChild(card);
    });
}

// Initialize the game
createGameBoard();

// ===========================================================================================
// ===========================================================================================
// ===========================================================================================
