/**
 * Function to show/hide recipe text on recipe cards.
 * Adds an event listener to the document to handle clicks on recipe card links.
 * When a link is clicked, it toggles the display of the associated recipe text.
 */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#recipe-section a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            var cardText = anchor.previousElementSibling;
            if (cardText && cardText.classList.contains('card-text')) {
                if (cardText.style.display === 'block') {
                    cardText.style.display = 'none';
                    anchor.textContent = 'Show recipe';
                } else {
                    cardText.style.display = 'block';
                    anchor.textContent = 'Hide recipe';
                }
            }
        });
    });
});