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

    // Function to get and display time and location
    function displayTimeAndLocation() {
        const timeLocationDiv = document.getElementById('time-location');

        // Get current time
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();

        // Get location using Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                timeLocationDiv.innerHTML = `Current Time: ${dateString} ${timeString} <br> Location: Latitude ${latitude}, Longitude ${longitude}`;
            }, error => {
                timeLocationDiv.innerHTML = `Current Time: ${dateString} ${timeString} <br> Location: Unable to retrieve location`;
            });
        } else {
            timeLocationDiv.innerHTML = `Current Time: ${dateString} ${timeString} <br> Location: Geolocation not supported`;
        }
    }

    // Call the function on page load
    window.onload = displayTimeAndLocation;
});