document.addEventListener('DOMContentLoaded', function () {
    const currentDateElement = document.getElementById('current');
    const firstSection = document.getElementById('first-section');
    const sections = {
        spring: document.getElementById('spring-section'),
        summer: document.getElementById('summer-section'),
        fall: document.getElementById('fall-section'),
        winter: document.getElementById('winter-section')
    };

    function getCurrentSeason() {
        const now = new Date();
        const month = now.getMonth() + 1; // JavaScript months are zero-based

        if (month >= 3 && month <= 5) {
            return 'spring';
        } else if (month >= 6 && month <= 8) {
            return 'summer';
        } else if (month >= 9 && month <= 11) {
            return 'fall';
        } else {
            return 'winter';
        }
    }

    function showRandomPoemForSeason(season) {
        const currentSection = sections[season];
        if (currentSection) {
            const poems = currentSection.querySelectorAll('.poem');
            poems.forEach(poem => {
                poem.style.display = 'none';
            });

            const randomIndex = Math.floor(Math.random() * poems.length);
            poems[randomIndex].style.display = 'block';

            currentSection.style.display = 'flex';
        }

        // Always show the first section
        firstSection.style.display = 'flex';
    }

    // Get the current season and update the content
    const currentSeason = getCurrentSeason();
    showRandomPoemForSeason(currentSeason);
    currentDateElement.textContent = currentSeason.toUpperCase();
});
