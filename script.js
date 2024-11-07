document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(anchor) {
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