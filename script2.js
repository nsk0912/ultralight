document.addEventListener('DOMContentLoaded', function () {
    const currentDateElement = document.getElementById('current');
    const firstSection = document.getElementById('section1');
    const poemContainers = document.querySelectorAll('.poem-container');

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

    function showSelectedPoem() {
        poemContainers.forEach(poemContainer => {
            poemContainer.style.display = 'none';
        });

        const currentSeason = getCurrentSeason();
        const currentPoemContainer = document.getElementById(`${currentSeason}-poem`);
        
        if (currentPoemContainer) {
            currentPoemContainer.style.display = 'flex';
        }

        // Always show the first section
        firstSection.style.display = 'flex';
    }

    // Get the current season and update the content
    showSelectedPoem();
    currentDateElement.textContent = getCurrentSeason().toUpperCase();
});
