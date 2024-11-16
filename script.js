const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('mode-icon');
const currentDate = document.getElementById('current-date');
const currentTime = document.getElementById('current-time');
const networkStatus = document.getElementById('network-status');
const batteryStatus = document.getElementById('battery-status');
const totalVisitors = document.getElementById('total-visitors');

// Mode toggle event
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        // Light Mode
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "#333";
        modeIcon.textContent = "🌞";
    } else {
        // Dark Mode
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#f0f0f0";
        modeIcon.textContent = "🌙";
    }
});

// Update current date and time
function updateDateTime() {
    const now = new Date();
    currentDate.textContent = now.toLocaleDateString();
    currentTime.textContent = now.toLocaleTimeString();
}

// Update network status
function updateNetworkStatus() {
    if (navigator.onLine) {
        networkStatus.textContent = 'Online';
    } else {
        networkStatus.textContent = 'Offline';
    }
}

// Update battery status
function updateBatteryStatus() {
    navigator.getBattery().then(battery => {
        const batteryLevel = Math.round(battery.level * 100);
        batteryStatus.textContent = `Battery: ${batteryLevel}%`;
    });
}

// Simulate total visitors count
let visitorsCount = 0;
function updateVisitorsCount() {
    visitorsCount++;
    totalVisitors.textContent = `Visitors: ${visitorsCount}`;
}

// Call functions to update information
setInterval(updateDateTime, 1000);
setInterval(updateNetworkStatus, 1000);
setInterval(updateBatteryStatus, 1000);
setInterval(updateVisitorsCount, 5000);

// Initial updates
updateDateTime();
updateNetworkStatus();
updateBatteryStatus();
updateVisitorsCount();
