// Select all the stacked cards
const cards = document.querySelectorAll('.stacked-card');

let currentCard = 0;

// Function to elevate cards one by one
function elevateCard() {
    // Remove 'elevated' class from all cards
    cards.forEach(card => card.classList.remove('elevated'));

    // Add 'elevated' class to the current card
    cards[currentCard].classList.add('elevated');

    // Move to the next card, loop back to first card when reaching the end
    currentCard = (currentCard + 1) % cards.length;
}

// Initial call to elevate the first card
elevateCard();

// Cycle through each card every 2 seconds (adjust as needed)
setInterval(elevateCard, 2000);
