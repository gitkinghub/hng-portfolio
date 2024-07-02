// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Update current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4); // Extracts only the time portion
    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      utcTime;
  }

  // Update current day of the week
  function updateDay() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    document.querySelector('[data-testid="currentDay"]').textContent =
      days[now.getUTCDay()];
  }

  updateTime();
  updateDay();
  setInterval(updateTime, 1000); // Update time every second
});
