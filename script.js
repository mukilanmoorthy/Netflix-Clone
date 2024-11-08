let currentPosition = 0;
const cardWidth = 200 + 10; // card + margin ethuu
const visibleCards = 5; // Number of cards visible at a time
const totalCards = 10; // total card vanthu carosul erukum
const track = document.getElementById('carousel-track');

function moveLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
}


function moveRight() {
    if (currentPosition < totalCards - visibleCards) {
        currentPosition++;
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
}

// faq question select  fulla select 
const faqEntries = document.querySelectorAll('.faq-entry');

faqEntries.forEach(faqEntry => {
    // Add click event listener to each faq-entry
    faqEntry.addEventListener('click', () => {
        // Toggle the 'active' class to show or hide the faq-answer
        faqEntry.classList.toggle('active');

        // Change the toggle icon between + and -
        const toggleIcon = faqEntry.querySelector('.toggle-icon');
        toggleIcon.textContent = faqEntry.classList.contains('active') ? '-' : '+';
    });
});