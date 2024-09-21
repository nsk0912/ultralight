document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const options = { 
            weekday: 'short', 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        const formattedTime = now.toLocaleDateString('en-GB', options).replace(',', '');
        document.getElementById('current-time').textContent = formattedTime;
    }
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
});